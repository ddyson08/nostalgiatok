const statusEl = document.getElementById('status');
const refreshBtn = document.getElementById('refresh');

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      statusEl.textContent = `Service Worker: registered (scope: ${reg.scope})`;

      // Listen for updates
      if (reg.installing) {
        statusEl.textContent = 'Service Worker: installing...';
      }
      reg.addEventListener('updatefound', () => {
        statusEl.textContent = 'Service Worker: update found';
      });

      // Prompt to reload when a new SW takes control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        statusEl.textContent = 'Updated! Reloading...';
        window.location.reload();
      });
    } catch (err) {
      statusEl.textContent = `Service Worker: registration failed`;
      console.error(err);
    }
  });
}

// Manual refresh to try network and update cache
refreshBtn?.addEventListener('click', async () => {
  try {
    const res = await fetch(window.location.href, { cache: 'no-store' });
    if (res.ok) statusEl.textContent = 'Content refreshed from network';
    else statusEl.textContent = 'Refresh failed';
  } catch {
    statusEl.textContent = 'Offline: showing cached content';
  }
});
