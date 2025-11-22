// Basic service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // For now, just fetch from the network.
  // Caching strategies would go here.
  event.respondWith(fetch(event.request));
});
