'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  options: {
    entry: {
      application: './index.js',
      specs: './spec/_all.js',
      vendor: ['jquery', 'bootstrap-sass']
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '/../public'),
      publicPath: 'public/'
    },

    mode: 'production',

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        async: true,
        name: 'vendor',
        minChunks: module => {
          return module.resource && /react|angluar|lodash/.test(module.resource)
        }
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
        {
          test: /\.special\.json$/,
          type: 'javascript/auto',
          use: 'special-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules')
                ]
              }
            }
          ]
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, '/../assets/scripts/templates/helpers')
            ]
          }
        }
      ]
    },

    resolve: {
      alias: {
        handlebars: 'handlebars/dist/handlebars.js'
      }
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false
  },

  optimization: {
    runtimeChunk: true
  }
}
