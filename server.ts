import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Determine primary port:
// Cloud Run in production passes PORT (e.g. 8080).
// In development, DEFAULT_APP_PORT is 3000.
// We must prioritize PORT so Cloud Run traffic is received!
const envPort = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;
const defaultAppPort = process.env.DEFAULT_APP_PORT ? parseInt(process.env.DEFAULT_APP_PORT, 10) : undefined;
const primaryPort = envPort || defaultAppPort || 3000;

// Resolve dist directory robustly
const distPath = fs.existsSync(path.join(__dirname, 'dist'))
  ? path.join(__dirname, 'dist')
  : path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');

// Health check endpoint for Cloud Run & load balancers
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from dist
app.use(express.static(distPath, {
  maxAge: '1d',
  index: false,
}));

// Fallback to index.html for SPA routing
app.get('*', (_req, res) => {
  if (fs.existsSync(indexPath)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SAMPLE SAAS WEBSITE</title>
  <style>
    body { background-color: #0a0a0c; color: #f4f5f7; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
  </style>
</head>
<body>
  <div style="text-align: center;">
    <h1 style="color: #c8ff00;">SAMPLE SAAS</h1>
    <p>Application is initializing. Please refresh in a few seconds.</p>
  </div>
</body>
</html>`);
  }
});

function bindPort(port: number, isFallback = false) {
  try {
    const server = app.listen(port, '0.0.0.0', () => {
      console.log(`SAMPLE SAAS server active on 0.0.0.0:${port}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`Port ${port} already bound.`);
        if (!isFallback && port !== 3000) {
          console.log('Attempting fallback port 3000...');
          bindPort(3000, true);
        }
      } else {
        console.error(`Server error on port ${port}:`, err);
      }
    });
  } catch (err) {
    console.error(`Failed to bind port ${port}:`, err);
  }
}

bindPort(primaryPort);

// If running in production on Cloud Run with PORT (e.g. 8080), also attempt 3000 if different
if (primaryPort !== 3000 && !process.env.NGINX_PORT) {
  bindPort(3000, true);
}


