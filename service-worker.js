const CACHE_NAME = "acoustic-simulator-v7-1";


const APP_FILES = [

    "./",

    "./index.html",

    "./style.css",

    "./questions.js",

    "./game.js",

    "./manifest.json",

    "./logo-master.png",

    "./icon-192.png",

    "./icon-512.png"

];


// -----------------------------
// INSTALL
// -----------------------------

self.addEventListener(
    "install",
    function (event) {

        event.waitUntil(

            caches
                .open(CACHE_NAME)

                .then(function (cache) {

                    return cache.addAll(
                        APP_FILES
                    );

                })

        );

        self.skipWaiting();

    }
);


// -----------------------------
// ACTIVATE
// -----------------------------

self.addEventListener(
    "activate",
    function (event) {

        event.waitUntil(

            caches
                .keys()

                .then(function (cacheNames) {

                    return Promise.all(

                        cacheNames.map(
                            function (cacheName) {

                                if (
                                    cacheName !==
                                    CACHE_NAME
                                ) {

                                    return caches.delete(
                                        cacheName
                                    );

                                }

                            }
                        )

                    );

                })

        );

        self.clients.claim();

    }
);


// -----------------------------
// FETCH / OFFLINE
// -----------------------------

self.addEventListener(
    "fetch",
    function (event) {

        if (
            event.request.method !== "GET"
        ) {

            return;

        }


        event.respondWith(

            fetch(event.request)

                .then(
                    function (networkResponse) {

                        const responseCopy =
                            networkResponse.clone();


                        caches
                            .open(CACHE_NAME)

                            .then(
                                function (cache) {

                                    cache.put(
                                        event.request,
                                        responseCopy
                                    );

                                }
                            );


                        return networkResponse;

                    }
                )


                .catch(
                    function () {

                        return caches
                            .match(event.request)

                            .then(
                                function (cachedResponse) {

                                    return (
                                        cachedResponse ||
                                        caches.match(
                                            "./index.html"
                                        )
                                    );

                                }
                            );

                    }
                )

        );

    }
);