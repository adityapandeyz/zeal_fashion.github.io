'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f6af4405a2fce1bae3ec635799e8a50e",
"assets/AssetManifest.json": "b4ea73a2d584b3804236e24064f53807",
"assets/assets/images/abstract-gdd75e1a7d_1280.jpg": "4b6a59d971198d1781d952a5ed3cda8e",
"assets/assets/images/category/49176625086494.jpg": "b29e3d60da4853c81fbbb4cd70a46fb1",
"assets/assets/images/category/49176625152030.jpg": "af47c24683a5a134f52da66fe8ccc535",
"assets/assets/images/category/49176625217566.jpg": "cf55e41149c1581bd900c89d49418207",
"assets/assets/images/category/49176625283102.jpg": "b1e6801c4c4ada23ba5f61ffaa3001aa",
"assets/assets/images/category/console.png": "64df50d8f0a00f1310a1ad247620ba23",
"assets/assets/images/category/dress.png": "983aef0d0abda974a55441dbed16d745",
"assets/assets/images/category/fashion.png": "e3b38be278a1a2c3675e40587f8f2a98",
"assets/assets/images/category/fashion1.png": "34be523fcb91707381450e040fd50ea8",
"assets/assets/images/category/handbag.png": "a90f2df2b4ea052231bbb29bfe2caaa3",
"assets/assets/images/category/kid1.jpg": "c1f0bebd3b85dd5eb815fae3974a47ef",
"assets/assets/images/category/kid2.jpg": "c1fe5ba4736529f819f8ec4bd0e3e3ca",
"assets/assets/images/category/kid3.jpg": "9624dbea1043cfe962df53388fb54587",
"assets/assets/images/category/kid4.jpg": "4293e542049194e1bf8a521c41dcb180",
"assets/assets/images/category/kids.jpg": "d4e2efbe4418ce3689717e032b598571",
"assets/assets/images/category/kisspng-clothing-accessories.jpg": "557ee6a3ffdea2d674ac4f54fe765df7",
"assets/assets/images/category/men.jpg": "9ee8ca192d7dd24cfe80b92ab8229b12",
"assets/assets/images/category/women.jpg": "68fae8efae65e9b45d40a3566c040299",
"assets/assets/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg": "9697dcea0e9af2f9f1e3be3affcd4850",
"assets/assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg": "79234696d85afe22f39062ec4542160f",
"assets/assets/images/home/2.jpg": "1d1c21500187c1cc50a403cda99d70c6",
"assets/assets/images/home/Brown%2520Abstract%2520Fashion%2520Special%2520Offer%2520LinkedIn%2520Banner.png": "52abe724af066222b5c5d9feda63f846",
"assets/assets/images/home/casual_collection.jpg": "651413365ac947068939ab7f25496e89",
"assets/assets/images/home/istockphoto-917123092-612x612.jpg": "f7dda29c1d678a3757ebd65f006c612c",
"assets/assets/logo/zeal_fashion_logo.jpg": "47a515116aee3220fd10cf4a1276a735",
"assets/assets/pngwing.com%2520(1).png": "955cd7595338bd1bd6251b06d1aa6913",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d99b9d3e6bfd7ffd7207f7e31182a2c0",
"assets/NOTICES": "af3f848e4cf39a3a91edd9067de17c0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a0f975ddf33ed762df2acb4d2617535e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f8894fa1164722f821087077257be03",
"/": "8f8894fa1164722f821087077257be03",
"main.dart.js": "200736f820529d43e889d89b1e8751cc",
"manifest.json": "3fa2a27fae6779750786e760b43c3d07",
"version.json": "b65d66bd3abefc03558f65f64639006c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
