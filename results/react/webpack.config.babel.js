import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let config = {
  entry: {
    main: './src/main.js',
    vendor: [ 'react', 'react-dom', 'cormoran' ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css?modules!less'
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor' ],
      filename: '[name].js', minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      bundlePath: (process.env.NODE_ENV === 'production') ? '/static/build' : '',
      template: 'src/index.ejs',
      minify: (process.env.NODE_ENV === 'production') ? {collapseWhitespace: true, minifyCSS: true, removeAttributeQuotes: true, removeComments: true} : false
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = null;
  config.devServer = {};
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8 : true
      }
    })
  ]);
}

export default config
