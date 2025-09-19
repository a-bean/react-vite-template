const isCi = process.env.CI !== undefined
if (!isCi) {
  require('husky').install()
  const fs = require('fs')
  const path = require('path')
  fs.chmodSync(path.resolve(__dirname, './pre-commit'), '700')
  fs.chmodSync(path.resolve(__dirname, './commit-msg'), '700')
  fs.chmodSync(path.resolve(__dirname, './pre-push'), '700')
}
