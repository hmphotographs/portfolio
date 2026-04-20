/* ══════════════════════════════════════════════
   HUSSAIN MAHMUD PHOTOGRAPHY — sw.js
   Service Worker — Cache-First Strategy
══════════════════════════════════════════════ */

const CACHE_NAME = 'hm-photography-v1';

/* ── All static assets to pre-cache on install ── */
const STATIC_ASSETS = [
  '/portfolio/',
  '/portfolio/index.html',
  '/portfolio/portfolio.html',
  '/portfolio/about.html',
  '/portfolio/contact.html',
  '/portfolio/stories.html',
  '/portfolio/style.css',
  '/portfolio/main.js',
  '/portfolio/stories.js',
  '/portfolio/manifest.json',

  /* Icons */
  '/portfolio/logo_1776338153641.png',
  '/portfolio/photographer.png',
  '/portfolio/icons/icon-192x192.png',
  '/portfolio/icons/icon-512x512.png',

  /* Gallery images */
  '/portfolio/Photo1_1776338153859.jpg',
  '/portfolio/Photo2_1776338153904.jpg',
  '/portfolio/Photo3_1776338153952.jpg',
  '/portfolio/Photo4_1776338153984.jpg',
  '/portfolio/Photo5_1776338154023.jpg',
  '/portfolio/Photo6_1776338154047.jpg',
  '/portfolio/Photo7_1776338154069.jpg',
  '/portfolio/Photo8_1776338154093.jpg',
  '/portfolio/PXL_20231025_164423266_1776340171141.jpg',
  '/portfolio/PXL_20260321_122043556_1776340171117.jpg',
  '/portfolio/PXL_20260321_124444527_1776340171089.jpg',
  '/portfolio/PXL_20240105_113433807.PORTRAIT_1776340171070.jpg',
  '/portfolio/PXL_20240105_112556053_1776340171044.jpg',
  '/portfolio/PXL_20230821_092954258_1776340171013.jpg',
  '/portfolio/PXL_20220810_182445307_1776340170981.jpg',
  '/portfolio/20260318_135147_1776340170896.jpg',
  '/portfolio/Hm.Photo1_(16)_1776340170956.jpg',
  '/portfolio/Hm.Photo1_(16)_77ac39_1776340170933.jpg',
];

/* ══════════════════════════
   INSTALL — pre-cache assets
══════════════════════════ */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  /* Activate immediately without waiting for old SW to die */
  self.skipWaiting();
});

/* ══════════════════════════
   ACTIVATE — clean old caches
══════════════════════════ */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  /* Take control of all open pages immediately */
  self.clients.claim();
});

/* ══════════════════════════
   FETCH — Cache-First Strategy
══════════════════════════ */
self.addEventListener('fetch', (event) => {
  /* Only handle GET requests */
  if (event.request.method !== 'GET') return;

  /* Skip non-http/https requests (chrome-extension, etc.) */
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      /* ✅ Cache hit — return cached asset immediately */
      if (cachedResponse) {
        return cachedResponse;
      }

      /* ❌ Cache miss — fetch from network, cache for later */
      return fetch(event.request)
        .then((networkResponse) => {
          /* Only cache valid, same-origin responses */
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === 'opaque'
          ) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          /* Offline fallback — serve index.html for navigation requests */
          if (event.request.mode === 'navigate') {
            return caches.match('/portfolio/index.html');
          }
        });
    })
  );
});
