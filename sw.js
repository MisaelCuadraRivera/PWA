// sw.js: Service Worker mínimo para que el sitio califique como PWA

const CACHE_NAME = 'geopwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest'
];

self.addEventListener("install", (event) => {
  console.log("SW: instalado");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("SW: cache abierto");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.error("SW: error al cachear", err);
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW: activado");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("SW: eliminando cache antiguo", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estrategia: Network First, luego Cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clonar la respuesta
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

