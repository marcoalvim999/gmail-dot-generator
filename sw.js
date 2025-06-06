self.addEventListener('install', event => {
  event.waitUntil(caches.open('dotgen-v1').then(cache => cache.addAll(['./', './manifest.json'])));
  self.skipWaiting();
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
