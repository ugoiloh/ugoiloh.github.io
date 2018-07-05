self.addEventListener('install', (event) => {
    
       
    event.waitUntil(
        caches.open('my_app_v1').then((cache) => {
            return cache.addAll([
            './',
            'css/main.css',
            'js/main.js',
            'js/curr_convert.js',
            
        
            ]);
        })
    );
   
    
});

self.addEventListener('fetch', (event) => {

    // const RequestUrl = new Url(event.request.Url);

    // if (RequestUrl.origin === location.origin) {
    //     if (RequestUrl.pathname === '/'){
    //         event.respondWith(caches.match('/skeleton'));
    //         return; 
    // } 
    // }
    event.respondWith(
        caches.match(event.request).then((response) =>{
            console.log('Resources added successfully!')
            return response || fetch(event.request)
            .then((response) =>{
                let ResponsetoCache = response.clone();
                caches.open('my_app_v2').then((cache) =>{
                console.log('cache updated!')
                cache.put(event.request,ResponsetoCache);
            });
                return response
            })
        })
    );
});
