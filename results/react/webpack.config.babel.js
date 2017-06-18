import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
    publichPath: '/',
    filename: '[name].js'
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
        loader: 'style!css?modules&localIdentName=[folder]-[hash:base64:5]!less'
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        loader: 'url?limit=100000'
      }
    ]
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8 : true
      }
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

export default config;
