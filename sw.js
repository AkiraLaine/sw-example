const CACHE_NAME = 'cache-v1';
const urls = [
  '/',
  './styles.css'
]

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened Cache')
        return cache.addAll(urls)
      })
  )
})

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => {
        if (res) return res
        else return fetch(event.request)
      })
  )
})