const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MODE = 'development';
const AutoPrefixer = require('autoprefixer');
const path = require('path');
const PATH = {
  scss: path.join(__dirname, './src/scss')
};

module.exports = [
  {
    mode: MODE,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'docs')
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: [/(node_modules)/, PATH.scss],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/react'
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          ]
        },
        {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer(
                    {
                      overrideBrowserslist: ['last 4 versions'],
                      grid: 'autoplace'
                    }
                  )
                ]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg|ico)$/i,
          use: [
            {

              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: './index.html'
      })
    ]
  }
];