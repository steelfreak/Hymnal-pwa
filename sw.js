const CACHE_NAME = 'hymnbook-cache-v1';
const urlsToCache = [
  '.',
  'hymnbook.html',  // Update if your HTML file is named differently
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached resource or fetch from network
      return response || fetch(event.request);
    })
  );
});
