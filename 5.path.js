const path = require('node:path')

// barra separadora de carpetas según SO.
console.log(path.sep)

// unir rutas con path
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const extension = path.extname('machipicchu.jpg')
console.log(extension)
