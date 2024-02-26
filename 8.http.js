const http = require('node:http')
const { findAvailablePort } = require('./9.free-port.js')

const server = http.createServer((req, res) => {
  console.log('solicitud recibida')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on por http://localhost:${port}`)
  })
})
