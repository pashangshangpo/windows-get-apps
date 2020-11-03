const path = require('path')
const { readFilePaths, writeFile, exists } = require('fs-promise')
const fileIcon = require('extract-file-icon')

const getAppFiles = async (appDirs, appExts) => {
  const filesPromise = []
  const fileKey = {}

  for (let appDir of appDirs) {
    filesPromise.push(
      readFilePaths(appDir, filePath => {
        return appExts.includes(path.extname(filePath))
      })
    )
  }

  const filesConcat = await Promise.all(filesPromise)

  for (let section of filesConcat) {
    for (let item of section) {
      fileKey[item] = ''
    }
  }

  const files = Object.keys(fileKey)

  return files
}

const getApps = async (appDirs, appExts, outPath) => {
  const appFiles = await getAppFiles(appDirs, appExts)
  const apps = []
  const appIconsPromise = []

  for (let filePath of appFiles) {
    const iconName = path.basename(filePath).replace(path.extname(filePath), '')
    const appIconPath = outPath
      ? path.resolve(outPath, iconName + '.png')
      : path.resolve('.', 'apps', iconName + '.png')

    apps.push({
      name: iconName,
      icon: appIconPath,
      path: filePath,
    })

    if (await exists(appIconPath)) {
      continue
    }

    appIconsPromise.push(writeFile(appIconPath, fileIcon(filePath, 32)))
  }

  await Promise.all(appIconsPromise)

  return apps
}

export const getApp = async (filePath, outPath) => {
  const iconName = path.basename(filePath).replace(path.extname(filePath), '')
  const appIconPath = outPath
    ? path.resolve(outPath, iconName + '.png')
    : path.resolve('.', 'apps', iconName + '.png')

  if (!(await exists(appIconPath))) {
    await writeFile(appIconPath, fileIcon(filePath, 32))
  }

  return {
    name: iconName,
    icon: appIconPath,
    path: filePath,
  }
}

export default (outPath = '', dirs = [], exts = []) => {
  const appExts = ['.appref-ms', '.exe', '.lnk', '.bat', '.url']
  const appDirs = [
    'C:\\Users\\Default\\Links',
    'C:\\Users\\Default\\Desktop',
    'C:\\Users\\Administrator\\Desktop',
    'C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Internet Explorer',
    'C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs',
  ]

  for (let dir of dirs) {
    if (!appDirs.includes(dir)) {
      appDirs.push(dir)
    }
  }

  for (let ext of exts) {
    if (!appExts.includes(ext)) {
      appExts.push(ext)
    }
  }

  return getApps(appDirs, appExts, outPath)
}
