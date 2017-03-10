const path = require('path')
const merry = require('merry')
const ecstatic = require('ecstatic')

const serve = ecstatic({
  root: path.join(__dirname, '../public')
})

const api = merry().router([
  ['/404', function (req, res, ctx, done) {
    serve(req, res, function (err) {
      if (err) {
        return merry.notFound(req, res, ctx, done)
      }
    })
  }]
])

module.exports = api
