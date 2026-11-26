/* Duolexia — service worker
   Cache shell lokal + aset CDN (Tailwind & font) agar bisa dibuka offline
   setelah sekali dipakai dengan koneksi. */

const CACHE = 'duolexia-v8';
const RUNTIME = 'duolexia-runtime-v8';

const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './img/avatar-1.png',
  './img/avatar-2.png',
  './img/avatar-3.png',
  './img/avatar-4.png',
  './img/avatar-5.png',
  './img/avatar-6.png',
  './img/mascot.png',
  './img/mascot-owl.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './img/kit/dee-lambai.png',
  './img/kit/dee-baca.png',
  './img/kit/dee-kaget.png',
  './img/kit/dee-senang.png',
  './img/kit/star.png',
  './img/kit/cloud.png',
  './img/kit/tree.png',
  './img/kit/grass.png'
];

const CDN_HOSTS = ['cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((url) => cache.add(url).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE && key !== RUNTIME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (err) {
    return;
  }

  // Aset CDN (Tailwind, Google Fonts): cache-first supaya tampilan tetap utuh offline.
  if (CDN_HOSTS.indexOf(url.hostname) !== -1) {
    event.respondWith(
      caches.open(RUNTIME).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response && (response.ok || response.type === 'opaque')) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (err) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  // Halaman: network-first agar pembaruan langsung terlihat.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Aset lokal: cache-first.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
        return response;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
