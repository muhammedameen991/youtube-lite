const CACHE_NAME = 'yt-lite-v1';
const ASSETS = [
    'index.html',
    'manifest.json'
];

// Install the service worker and cache files
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Fetch cached content when offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
