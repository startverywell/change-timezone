const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html/,
        type: 'asset/source',
      },
      {
        test: /\.css/,
        type: 'asset/source',
      },
    ],
  },
};
