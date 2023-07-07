'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "477434c745fe1e0e034b377560611afb",
"splash/img/light-2x.png": "5f581eeb67fd58bbdf8aab6ebfe91e4e",
"splash/img/dark-4x.png": "dac185bc512285dc3c185d45d4e2cf33",
"splash/img/light-3x.png": "2534e3c90da5116ba221414a50c327fe",
"splash/img/dark-3x.png": "36da29207b5ba9b6b897eb1044f090bd",
"splash/img/light-4x.png": "5806fa28a74bbc736174c399e6b371c9",
"splash/img/dark-2x.png": "a0d455178efd613803dff76e413b87ec",
"splash/img/dark-1x.png": "ee9d4f6b7977ea6943823acfafbe41b0",
"splash/img/light-1x.png": "1db1e423565713231e052cd0eb311647",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "7cc00019c8ee9a9a1fec2231e4712529",
"index.html": "9d4926d8aaf0534e0d28c0b19874026b",
"/": "9d4926d8aaf0534e0d28c0b19874026b",
"main.dart.js": "9ef069c5048fd4f844bc4577e1f238ca",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "d66ae278d5193870f7e562abb1fe0a88",
"icons/Icon-192.png": "2a85240f63bbb51d91556e78730c3eef",
"icons/Icon-maskable-192.png": "2a85240f63bbb51d91556e78730c3eef",
"icons/Icon-maskable-512.png": "6e12c5bfe2283c1a30563fd25524f676",
"icons/Icon-512.png": "6e12c5bfe2283c1a30563fd25524f676",
"manifest.json": "2734494341c4ebd8e47f39157fe7002f",
"assets/AssetManifest.json": "2342610b128d504cd2613398900043b9",
"assets/NOTICES": "fe0626961f3084e960fe910c70d8e271",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/images/logo-round.png": "6aa101bc61e871bb7952823ae67d483b",
"assets/lib/images/logo-round-dark.png": "eeddddc8c53250cf986916a711bc7e7b",
"assets/lib/images/logo.jpg": "66d4c013c2b2b81124ee9fd4430f4a82",
"assets/lib/icons/icon-search.png": "d1f5a263fefd17b818847cf3aa9e3b79",
"assets/lib/icons/icon-close.png": "1ff103377a2db28c0e9f3d64c15b26f3",
"assets/lib/icons/icon-zoom-out.png": "5b3d7e3b80018fb0461f58fbf3de4717",
"assets/lib/icons/2.0x/icon-search.png": "96b7a3990f14c4c6ade825d617404936",
"assets/lib/icons/2.0x/icon-close.png": "cdcea3f1c122337e951145ec95a7abd1",
"assets/lib/icons/2.0x/icon-zoom-out.png": "d0afae9abf8feb98de48ec349daccc3f",
"assets/lib/icons/2.0x/icon-collection.png": "a3540caaff9c9cf1b1cc37b9cec1cdcd",
"assets/lib/icons/2.0x/icon-share-android.png": "890e5db7c59b52a8dd02d8329c4942cb",
"assets/lib/icons/2.0x/icon-share-ios.png": "77b51dfe6b8e1b849fc9180a5a46507a",
"assets/lib/icons/2.0x/icon-info.png": "b6727ab80ab1914c460126d623d64b90",
"assets/lib/icons/2.0x/icon-wallpaper.png": "fd04de6d9226d03fbf6a3bc68c65029b",
"assets/lib/icons/2.0x/icon-close-large.png": "5770c80cc114fd37a655095b86960bfd",
"assets/lib/icons/2.0x/icon-expand.png": "defe38b67f27f43fc2dfa7f4c093f327",
"assets/lib/icons/2.0x/icon-timeline.png": "01caa97453d580b5b9b4be044a3162b6",
"assets/lib/icons/2.0x/icon-fullscreen-exit.png": "86679cbc06bef05e3a85ee4c506ce6bc",
"assets/lib/icons/2.0x/icon-reset-location.png": "fab9dcdde21ac0f83d5f5f31b2e2ac95",
"assets/lib/icons/2.0x/icon-prev.png": "0414fe5692150506800017bae9281594",
"assets/lib/icons/2.0x/icon-zoom-in.png": "3dd15e7c6d79b934fdfd76f7f43a6bc9",
"assets/lib/icons/2.0x/icon-menu.png": "96e6bbe555c64170f9d95ef234b9eaa3",
"assets/lib/icons/2.0x/icon-next-large.png": "2cabe8b135c0c28c82ba73e1c230edaf",
"assets/lib/icons/2.0x/icon-fullscreen.png": "bfb69399a9a4b5307c00ce5a6d25f1dc",
"assets/lib/icons/2.0x/icon-north.png": "fd2bd6ed7ef8854415d3d6921a34d472",
"assets/lib/icons/2.0x/icon-download.png": "51be5e1637d748a015c9512ded511750",
"assets/lib/icons/icon-collection.png": "3ebf11972b52eea0cf72c49ab7c796f5",
"assets/lib/icons/icon-share-android.png": "8cbdf5df77919be58b5cb1992876fb6e",
"assets/lib/icons/icon-share-ios.png": "fcf1cad03b98f36574b53656aa5f61cb",
"assets/lib/icons/icon-info.png": "094d7f20d04efce55fc83777e575f2e0",
"assets/lib/icons/icon-wallpaper.png": "ff9a41dabbae89d80468e328b7f1a687",
"assets/lib/icons/icon-close-large.png": "cd29d10d2ba9900d13a43fbd89050e11",
"assets/lib/icons/3.0x/icon-search.png": "39ecc01cfb979e4ac49872b9a0d6eeb1",
"assets/lib/icons/3.0x/icon-close.png": "9f050c1ed49d5758d1c0f73c45b320d2",
"assets/lib/icons/3.0x/icon-zoom-out.png": "4cb1384d05d574c10bda71a556324e27",
"assets/lib/icons/3.0x/icon-collection.png": "f2b6238a689c73071bb027d7f7cd8de1",
"assets/lib/icons/3.0x/icon-share-android.png": "de70a67979973643cfb60c7928c964ba",
"assets/lib/icons/3.0x/icon-share-ios.png": "5d12ed020e5487802ab51719d69b07da",
"assets/lib/icons/3.0x/icon-info.png": "524fe01403bf365870fa654e8e7d2ff2",
"assets/lib/icons/3.0x/icon-wallpaper.png": "cd7d037baecdd572a0ca7faea234e58f",
"assets/lib/icons/3.0x/icon-close-large.png": "ca63636ba9ddfc307c6818ef28e5a24e",
"assets/lib/icons/3.0x/icon-expand.png": "19344b54a1fb163e1bf2baf27350343b",
"assets/lib/icons/3.0x/icon-timeline.png": "67aba904dcd474349d451b20ecd9d191",
"assets/lib/icons/3.0x/icon-fullscreen-exit.png": "0da2826215e3d5c1a105f2df34b769ec",
"assets/lib/icons/3.0x/icon-reset-location.png": "44815e759181126f00d4a58cc1ac1160",
"assets/lib/icons/3.0x/icon-prev.png": "af6d07f1f1090d660339c348186f888c",
"assets/lib/icons/3.0x/icon-zoom-in.png": "57247a06dd946e0df625a53308b8be2c",
"assets/lib/icons/3.0x/icon-menu.png": "c2c9b16f6995a0aad582eaa95380a133",
"assets/lib/icons/3.0x/icon-next-large.png": "97a78148e3ac96cc9134979277adce70",
"assets/lib/icons/3.0x/icon-fullscreen.png": "0564840e6255fbe67d8dcb67b64e714a",
"assets/lib/icons/3.0x/icon-north.png": "cd9d83e3de69a62d9726de681e723fa6",
"assets/lib/icons/3.0x/icon-download.png": "1a91ec4a4a75061fe754356eb3ffd8b3",
"assets/lib/icons/icon-expand.png": "b8974048206fc6efbc73a0abdf13a449",
"assets/lib/icons/icon-timeline.png": "26ab5639d5ca9e83566579786953bfb3",
"assets/lib/icons/icon-fullscreen-exit.png": "38eacad39f8535b7c240b7bf6b07e323",
"assets/lib/icons/icon-reset-location.png": "59c8fae6866a9dcaded0eb5e9be5cb63",
"assets/lib/icons/icon-prev.png": "63a70fb29b956a823ddf1914e58247ed",
"assets/lib/icons/icon-zoom-in.png": "7d489db878a376dbfd3d4c156aa392f8",
"assets/lib/icons/icon-menu.png": "af9582b0525958e7a6133022d03c5de9",
"assets/lib/icons/icon-next-large.png": "b76fc181a19ad60d086029cea98cdb86",
"assets/lib/icons/icon-fullscreen.png": "1f7197f059506f648a7a7eb1bd7f29b7",
"assets/lib/icons/icon-north.png": "edf5f44bf4450a4eb74c29bf5c17041b",
"assets/lib/icons/icon-download.png": "ae5aa3901c495b0b2eb6818a40af813b",
"assets/lib/fonts/WorkSans-Regular.ttf": "7d761a652f8e716f57f4352b0f4e6280",
"assets/lib/fonts/NunitoSans-LightItalic.ttf": "bc3489f6859f9f64e3891908b0a0d46c",
"assets/lib/fonts/NunitoSans-BoldItalic.ttf": "0c17d21db93136847a02b79a9c5acc0d",
"assets/lib/fonts/NunitoSans-ExtraLight.ttf": "58713e07b7ee41bdbdaa72703be0c6c6",
"assets/lib/fonts/NunitoSans-Light.ttf": "3b696c5e8c55321863bfbf03ef0c0ff3",
"assets/lib/fonts/WorkSans-Light.ttf": "fac65b7a2b5c287d027e8ab9df15ff58",
"assets/lib/fonts/WorkSans-ExtraBold.ttf": "749d400e25914e869b2cb9f554439eb4",
"assets/lib/fonts/WorkSans-SemiBoldItalic.ttf": "a3055c7fa017d1a42017d2bfa1752367",
"assets/lib/fonts/WorkSans-MediumItalic.ttf": "624fb450f2a020fbf2ff5ac9ce819735",
"assets/lib/fonts/WorkSans-BoldItalic.ttf": "790daadd5f8ef3ecd3d7587a96196452",
"assets/lib/fonts/WorkSans-ExtraLight.ttf": "08652b8358873ee1f44ac52b67b1c109",
"assets/lib/fonts/WorkSans-ThinItalic.ttf": "aaa7ac6ae9019efedaba7674f9cc785f",
"assets/lib/fonts/OFL_WorkSans.txt": "981da6d9753475b7c1627ec76309b3ab",
"assets/lib/fonts/NunitoSans-BlackItalic.ttf": "c5ef9713df6633c8dd9e42c1a45495de",
"assets/lib/fonts/WorkSans-VariableFont_wght.ttf": "941a3b79279574b223a8ae8524585954",
"assets/lib/fonts/WorkSans-ExtraLightItalic.ttf": "554d8a2e648d21406895206038a9386e",
"assets/lib/fonts/WorkSans-Medium.ttf": "800a9cf85712fd7f1b863e3b2b3a1dc5",
"assets/lib/fonts/NunitoSans-ExtraBold.ttf": "1d86790a12f81cc60ab837c979bab63d",
"assets/lib/fonts/OFL_NunitoSans.txt": "23d4d0303ede3add187dce33e45e74ba",
"assets/lib/fonts/NunitoSans-Regular.ttf": "4dac705158fb1ca226d583b3829f82a0",
"assets/lib/fonts/WorkSans-SemiBold.ttf": "a66feef293ecb953decfc8aa3fbf12ab",
"assets/lib/fonts/NunitoSans-SemiBoldItalic.ttf": "b8fb6d82716bef6558b16867a6fa5702",
"assets/lib/fonts/NunitoSans-Italic.ttf": "ceeddfb0cea317042f4c796b72dfd6bf",
"assets/lib/fonts/WorkSans-Italic.ttf": "4fdd230bd503bd5802a9d4793a08a72f",
"assets/lib/fonts/WorkSans-Italic-VariableFont_wght.ttf": "1cf15bedf5445dc764afd6c5d2304522",
"assets/lib/fonts/NunitoSans-Bold.ttf": "ac72fe0f27dd514aa3215e8424842062",
"assets/lib/fonts/WorkSans-BlackItalic.ttf": "397e988b62638fa420f269108c81bedf",
"assets/lib/fonts/WorkSans-Thin.ttf": "69825d3bbd338a65e0ba517745d84be7",
"assets/lib/fonts/NunitoSans-SemiBold.ttf": "2836528ad13278d88bcc509dc3f8102b",
"assets/lib/fonts/NunitoSans-Black.ttf": "1f8f5740309e62a563b8a5c9d59ece3b",
"assets/lib/fonts/WorkSans-Black.ttf": "d174236ffb8ef7c2158395e4ee83e3b6",
"assets/lib/fonts/NunitoSans-ExtraBoldItalic.ttf": "fd9f725108ba8d058032c48218522a41",
"assets/lib/fonts/NunitoSans-ExtraLightItalic.ttf": "93f8af033d60621442f90c61507d86ad",
"assets/lib/fonts/WorkSans-LightItalic.ttf": "a0ef04b88a6c06b5714172e9d32b9b0b",
"assets/lib/fonts/WorkSans-ExtraBoldItalic.ttf": "1ffabd271fdf17de63068626946457a2",
"assets/lib/fonts/WorkSans-Bold.ttf": "f051cc0ed2761378e886727284cf3c05",
"assets/lib/translations/tr.json": "d7d966c56bbad697bfc6a89e65a02261",
"assets/lib/translations/en.json": "d7d966c56bbad697bfc6a89e65a02261",
"assets/AssetManifest.bin": "f464c30ed4c60ccf307b220905712a4d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
