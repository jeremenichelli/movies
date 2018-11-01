const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const htmlMinifierConfig = {
  collapseWhitespace: true,
  minifyCSS: true,
  removeAttributeQuotes: true,
  removeComments: true
};

// common config
let config = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: 'localIdentName=[folder]-[hash:base64:5]'
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        use: [
          { loader: 'url-loader', query: { limit: 10000 } }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '_'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: isProduction ? htmlMinifierConfig : false
    })
  ]
}

if (isProduction) {
  // production config
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
			asset: "[path].gz",
			algorithm: "gzip"
		})
  ]);
} else {
  // dev config
  config.devServer = {
    contentBase: path.resolve(__dirname, 'static'),
    historyApiFallback: true
  };
  config.devtool = 'source-map';
}

module.exports = config;
