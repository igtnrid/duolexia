const CACHE_NAME = 'duolexia-v3'; 

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './mascot.png',
  './avatar1.png',
  './avatar2.png',
  './avatar3.png',
  './avatar4.png',
  './avatar5.png',
  './avatar6.png'
];

// 1. Proses Install: Menyimpan file ke dalam cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 2. Proses Activate: Menghapus cache versi lama
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Proses Fetch: Mengambil file dari cache atau internet
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  // Jika membuka halaman (navigasi), utamakan jaringan internet (Network First)
  // Agar update kode HTML langsung terlihat
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Untuk aset (gambar, css), utamakan cache (Cache First)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // Hanya simpan response yang valid
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        return res;
      });
    }).catch(() => {})
  );
});