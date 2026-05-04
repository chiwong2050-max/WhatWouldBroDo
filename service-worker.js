const CACHE_NAME = "wwbd-cache-v13";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./terms.html",
  "./privacy.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./og.png",
  "./og-square.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

const OFFLINE_FALLBACK = new URL("./index.html", self.location).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  const isNavigation = request.mode === "navigate" || request.destination === "document";

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      if (isNavigation) {
        try {
          const networkResponse = await fetch(request);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          return (await cache.match(OFFLINE_FALLBACK)) || (await cache.match(new Request("./index.html")));
        }
      }

      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        return cached;
      }
    })(),
  );
});

self.addEventListener("push", (event) => {
  event.waitUntil(
    (async () => {
      let payload = {};
      try {
        payload = event?.data ? event.data.json() : {};
      } catch (e) {
        try {
          payload = { body: event?.data ? event.data.text() : "" };
        } catch (err) {
          payload = {};
        }
      }

      const title = payload?.title || "Daily Blessing";
      const body = payload?.body || "Bro says: Open the app. Receive the blessing.";
      const url = payload?.url || "./";

      await self.registration.showNotification(title, {
        body,
        icon: "./icons/icon-192.png",
        badge: "./icons/icon-192.png",
        tag: payload?.tag || "bro-blessing",
        renotify: false,
        data: { url },
      });
    })(),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.url || "./";

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const client of allClients) {
        if ("focus" in client) {
          try {
            await client.focus();
            client.navigate(targetUrl);
            return;
          } catch (e) {
          }
        }
      }
      await self.clients.openWindow(targetUrl);
    })(),
  );
});
