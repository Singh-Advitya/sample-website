import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Determine port:
// If DEFAULT_APP_PORT is present (as in AI Studio / Cloud Run with Nginx on 8080), listen on 3000.
// Otherwise, use PORT or 3000.
const targetPort = process.env.DEFAULT_APP_PORT
  ? parseInt(process.env.DEFAULT_APP_PORT, 10)
  : (process.env.NGINX_PORT ? 3000 : (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000));

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Health check endpoint for Cloud Run & load balancers
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from dist
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (_req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SAMPLE SAAS</title>
</head>
<body style="background:#0a0a0c;color:#f4f5f7;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="text-align:center;">
    <h1>Building application...</h1>
    <p>Please refresh in a moment.</p>
  </div>
</body>
</html>`);
  }
});

function startServer(port: number) {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`SAMPLE SAAS WEBSITE production server listening on port ${port}`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE' && port !== 3000) {
      console.warn(`Port ${port} in use, retrying on port 3000...`);
      startServer(3000);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(targetPort);

