const minimist = require('minimist')
const rawArgs = process.argv.slice(2)
const args = minimist(rawArgs)
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, '../packages/'))

function getExternals(dependencies) {
  return externals = {
    '@jzjy/request': {
      root: 'request',
      commonjs2: '@jzjy/request',
      commonjs: '@jzjy/request',
      amd: '@jzjy/request'
    },
    axios: {
      root: 'axios',
      commonjs2: 'axios',
      commonjs: 'axios',
      amd: 'axios'
    },
    'crypto-js': {
      root: 'CryptoJS',
      commonjs2: 'crypto-js',
      commonjs: 'crypto-js',
      amd: 'crypto-js'
    },
    qs: { root: 'qs', commonjs2: 'qs', commonjs: 'qs', amd: 'qs' }
  }
  // if (dependencies) {
  //   Object.keys(dependencies).forEach(item => {
  //     externals[item] = {
  //       root: `${item}`,
  //       commonjs2: `${item}`,
  //       commonjs: `${item}`,
  //       amd: `${item}`
  //     }
  //   })
  //   Object.keys(externals['crypto-js']).forEach(() => externals['crypto-js']['root'] = 'CryptoJS')
  //   return externals
  // }
}

const packageWebpackConfig = {}

packages.forEach(item => {
  const stat = fs.lstatSync(path.resolve(__dirname, '../packages/', item))
  const isDir = stat.isDirectory()

  const packagePath = path.resolve(__dirname, '../packages/', item)
  if (isDir) {
    const { name, dependencies } = require(path.resolve(packagePath, 'package.json'))
    packageWebpackConfig[item] = {
      path: packagePath,
      name,
      externals: getExternals(dependencies)
    }
  }
})

function build(configs) {
  configs.forEach(config => {
    webpack(webpackConfig(config), (err, stats) => {
      if (err) {
        console.error(err)
        return
      }

      console.log(stats.toString({
        chunks: false,
        colors: true
      }))

      if (stats.hasErrors()) {
        return
      }

      console.log(`${config.name} 打包成功！`)
    })
  })
}

console.log(`\n===> 构建进行中，请稍后...`)

if (args.p) {
  if (packageWebpackConfig[args.p]) {
    build([packageWebpackConfig[args.p]])
  } else {
    console.error(`${args.p} 包找不到`)
  }
} else {
  console.log(packageWebpackConfig)
  build(Object.values(packageWebpackConfig))
}
