// App files: network-first (naya code turant). Pyodide (Python engine): cache-first, version fixed hai.
const CACHE = "jp-v1-1";
const SHELL = ["./", "./index.html", "./content.js", "./py-worker.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("jp-") && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET") return;
  if (u.href.startsWith("https://cdn.jsdelivr.net/pyodide/")) {
    e.respondWith(caches.open("jp-pyodide-0.26.4").then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r;
    }));
    return;
  }
  if (u.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
