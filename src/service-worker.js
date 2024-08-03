const GHPATH = "/SpellTune";
const APP_PREFIX = "mypwa_";
const VERSION = "version_01";
const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/icons/icon-192x192.png`,
  `${GHPATH}/icons/icon-512x512.png`,
  `${GHPATH}/screenshots/screenshot1.png`,
  `${GHPATH}/screenshots/screenshot2.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_PREFIX + VERSION).then((cache) => {
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
