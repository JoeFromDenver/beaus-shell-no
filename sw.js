const CACHE_NAME = 'shell-no-v1';
const ASSETS = [
  './',
  './index.html',
  // Add other assets if any external ones exist
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
