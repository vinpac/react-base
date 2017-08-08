import pkg from '../package.json'
import { copyDir, copyFile, makeDir, writeFile } from './lib/fs'


async function copy() {
  await makeDir('build')
  await Promise.all([
    writeFile('build/package.json', JSON.stringify({
      private: true,
      engines: pkg.engines,
      dependencies: pkg.dependencies,
      scripts: {
        start: 'node server.js',
      },
    }, null, 2)),
    copyFile('LICENSE.txt', 'build/LICENSE.txt'),
    copyDir('public', 'build/public'),
    copyDir('src/core/templates/views', 'build/templates/views'),
  ])
}

export default copy
