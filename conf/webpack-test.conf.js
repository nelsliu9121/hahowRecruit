const webpack = require('webpack');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|.*\.spec\.js)/,
        loader: 'isparta'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery"
    })
  ],
  debug: true,
  devtool: 'cheap-module-eval-source-map'
};
