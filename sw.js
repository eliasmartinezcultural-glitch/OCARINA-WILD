const CACHE="ocarina-wild-2.0.0";
const SHELL=["./","./index.html","./styles.css","./app.js","./core/engine.js","./core/state.js","./core/policy.js","./data/catalog.js","./data/schema.json"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET")return;
 event.respondWith(
   fetch(req).then(res=>{
     const copy=res.clone();
     caches.open(CACHE).then(cache=>cache.put(req,copy));
     return res;
   }).catch(()=>caches.match(req).then(cached=>cached||caches.match("./index.html")))
 );
});