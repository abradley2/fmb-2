const http = require('http')
const api = require('./api')

const server = http.createServer(api.start())

server.listen(8080)
