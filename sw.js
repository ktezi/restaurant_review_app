let CachedNameData = "mws-restaurant-stage-1-master";

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CachedNameData).then(function(cache) {
     return cache.addAll([
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'data/restaurants.json',
       '',
      'index.html',
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg',
      'img/6.jpg',
      'img/7.jpg',
      'img/8.jpg',
      'img/9.jpg',
      'img/10.jpg',
      'restaurant.html',
      'restaurant.html?id=1',
      'restaurant.html?id=2',
      'restaurant.html?id=3',
      'restaurant.html?id=4',
      'restaurant.html?id=5',
      'restaurant.html?id=6',
      'restaurant.html?id=7',
      'restaurant.html?id=8',
      'restaurant.html?id=9',
      'restaurant.html?id=10',
      'css/styles.css',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  if(event.request.url.startsWith(self.location.origin)){
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
     })
    );
  }
});