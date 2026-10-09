import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
  } catch (err) {
    console.error('Fatal initialization error:', err);
    rootElement.innerHTML = `
      <div style="min-height:100vh;background:#0a0a0c;color:#f4f5f7;display:flex;align-items:center;justify-content:center;font-family:sans-serif;padding:24px;">
        <div style="max-width:440px;text-align:center;background:#14151b;padding:32px;border-radius:16px;border:1px solid rgba(255,255,255,0.1);">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(200,255,0,0.1);color:#c8ff00;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-weight:bold;font-family:monospace;font-size:20px;">!</div>
          <h2 style="margin:0 0 8px;font-size:18px;color:#fff;">SAMPLE Experience</h2>
          <p style="color:#9ca3af;font-size:14px;margin:0 0 20px;line-height:1.5;">Application initialized with a recovery trigger.</p>
          <button onclick="window.location.reload()" style="background:#c8ff00;color:#000;border:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;cursor:pointer;">Reload Experience</button>
        </div>
      </div>
    `;
  }
}
