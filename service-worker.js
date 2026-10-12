const CACHE_NAME = 'it-security-v1';
const urlsToCache = ['./','./index.html','./tests.html'];
self.addEventListener('install', e => {
 e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));
});
self.addEventListener('fetch', e => {
 e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
