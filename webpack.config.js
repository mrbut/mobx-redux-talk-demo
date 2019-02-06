const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './redux/client/index.js',
    output: {
      path: path.resolve(__dirname, 'redux/dist'),
      filename: 'redux.bundle.js'
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=assets/images/[name].[ext]'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: ['url-loader?limit=100000']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './redux/client/index.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      })
    ]
  },
  {
    entry: './mobx/client/index.js',
    output: {
      path: path.resolve(__dirname, 'mobx/dist'),
      filename: 'mobx.bundle.js'
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=assets/images/[name].[ext]'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: ['url-loader?limit=100000']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './mobx/client/index.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      })
    ]
  }
];
