const CACHE_NAME = 'hymnbook-cache-v1';

const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'songs.js',
  // Add any other assets or files your app requires offline here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found, else fetch from network
        return cachedResponse || fetch(event.request);
      })
  );
});
