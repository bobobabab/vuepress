const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = options => {
  let library = options.name.substr(6, options.name.length)
  const DEFAULT_NAME = ['cli', 'request', 'verify']
  if (!DEFAULT_NAME.includes(library)) {
    library = library.charAt(0).toUpperCase() + library.slice(1)
  }
  return {
    mode: 'production',
    entry: path.resolve(options.path, './lib/index'),
    output: {
      path: path.resolve(options.path, './dist'),
      filename: `index.min.js`,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      library,
      libraryExport: 'default'
    },
    externals: options.externals,
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
    ],
    resolve: {
      extensions: ['.vue', '.jsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(options.path, './lib')],
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        },
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          exclude: /node_modules/,
          options: {
            optimizeSSR: false
          }
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    optimization: {
      minimize: false
    }
  }
}
