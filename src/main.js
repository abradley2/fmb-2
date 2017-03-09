const m = require('mithril')
const store = require('./store')
const home = require('./modules/home')

store.init()
console.log('store = ', store)

m.route(document.getElementById('app'), '/', {
  '/': home
})
