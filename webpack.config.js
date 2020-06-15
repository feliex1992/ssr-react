const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: [
    //       {
    //         loader: path.resolve('path/to/loader.js'),
    //         options: {'dev'}
    //       }
    //     ]
    //   }
    // ]
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};