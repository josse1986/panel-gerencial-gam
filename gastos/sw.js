// Service worker mínimo: permite que Chrome ofrezca "Instalar app". No guarda datos en caché.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
