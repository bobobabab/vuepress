module.exports = options => {
  options.cache(true)

  const presets = [
    [
      '@babel/preset-env'
    ]
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ]

  return {
    presets,
    plugins,
    ignore: ['node_modules']
  }
}
