import run from './run'

process.argv.push('--release')

async function buildRelease() {
  await run(require('./build')) // eslint-disable-line global-require
}

export default buildRelease
