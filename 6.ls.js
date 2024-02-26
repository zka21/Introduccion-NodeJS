const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('error al leer directorio:', err)
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})
