// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var targetPort = process.env.DEFAULT_APP_PORT ? parseInt(process.env.DEFAULT_APP_PORT, 10) : process.env.NGINX_PORT ? 3e3 : process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
var distPath = path.join(__dirname, "dist");
var indexPath = path.join(distPath, "index.html");
app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});
app.use(express.static(distPath));
app.get("*", (_req, res) => {
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
function startServer(port) {
  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`SAMPLE SAAS WEBSITE production server listening on port ${port}`);
  });
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && port !== 3e3) {
      console.warn(`Port ${port} in use, retrying on port 3000...`);
      startServer(3e3);
    } else {
      console.error("Server error:", err);
    }
  });
}
startServer(targetPort);
