/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'nostalgiaTok';
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/app.js',
  '/style.css',
  '/GlacialIndifference-Regular.otf',
  '/GlacialIndifference-Bold.otf',
  'logo.png',
];

// Install: cache app shell


async function openAppCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache;
}
// In service-worker.js
const urlsToCache = [
  '/',
  'index.html',
  'script.js',
  'style.css'
];
// In service-worker.js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request) // Try to find the request in any cache
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // 'addAll' fetches the URLs and stores the responses in the cache
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate: cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : undefined))
      )
    )
  );
  self.clients.claim();
});

// In service-worker.js, during the 'activate' event for cleanup
const cacheAllowList = [CACHE_NAME];

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
