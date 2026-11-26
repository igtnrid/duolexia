const CACHE_NAME = 'duolexia-v2'; // Naikkan versi ke v2

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './mascot.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // Daftar file audio Anda:
  './audio/b.mp3',
  './audio/d.mp3',
  './audio/p.mp3',
  './audio/q.mp3',
  './audio/welcome.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200) return res;
        if (res.type !== 'basic' && res.type !== 'cors') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => {});
    })
  );
});