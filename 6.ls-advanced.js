const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files

  try {
    files = await fs.readdir(folder)
    console.log(files)
  } catch {
    console.error(pc.red(`🔴 Error al leer el directorio ${pc.bold(folder)}`))
    process.exit(1)
  }
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se puede leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `✅ ${pc.yellow(fileType)} ${pc.magenta(file.padEnd(25))} ${pc.blue(
      fileSize.padStart(25)
    )} ${pc.cyan(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
