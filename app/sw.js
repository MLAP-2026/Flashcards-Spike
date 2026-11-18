// Service worker genere par vite.config.js : ne pas modifier a la main.
const CACHE = 'flashcards-11cefd5dfa2c';
const RESSOURCES = ["./","index.html","manifest.json","icon.svg","icon-192.png","icon-512.png","assets/index-DQfdMEvP.css","assets/index-DAy7K217.js"];

self.addEventListener('install', (event) => {
  // Pas de skipWaiting : la nouvelle version prend le relais au lancement suivant.
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(RESSOURCES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(cles.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Recherche par URL : passer l'objet Request directement ne retrouve pas les modules et le CSS.
  event.respondWith(
    caches.open(CACHE).then((cache) => cache.match(event.request.url).then((enCache) => {
      if (enCache) return enCache;
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') return cache.match(new URL('index.html', self.location).href);
        return Response.error();
      });
    }))
  );
});
