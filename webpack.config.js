// webpack.config.js

var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var path = require('path');
var outPath = path.join(__dirname, './public');
var sourcePath = path.join(__dirname, './src');

var config = {
  entry: {
    main: [
      './src/index.tsx'
    ],
    vendor: [
      'react',
      'react-dom',
      // 'react-redux',
      // 'redux',
      'styled-components'
    ]
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[name].bundle.js?_=[chunkhash]',
    chunkFilename: '[id].chunk.js?_=[chunkhash]'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', ".less"],
    mainFields: ['main'],
    alias: {

    }
  },
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase: sourcePath,
    stats: {
      warnings: false
    },
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader'
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader', options: {
          sourceMap: true
        }
      }, {
        loader: 'less-loader', options: {
          sourceMap: true
        }
      }]
    }]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     context: sourcePath,
    //     postcss: [
    //       require('postcss-import')({
    //         addDependencyTo: webpack
    //       }),
    //       require('postcss-url')(),
    //       require('postcss-cssnext')(),
    //       require('postcss-reporter')(),
    //       require('postcss-browser-reporter')({
    //         disabled: false
    //       }),
    //     ]
    //   }
    // }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};

module.exports = config;
