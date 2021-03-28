const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = (env) => {
  // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  let PRODUCTION;
  if (env.NODE_ENV === 'production') {
    PRODUCTION = true;
  } else {
    PRODUCTION = false;
  }
  return {
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

      new webpack.DefinePlugin({
        PRODUCTION: PRODUCTION,
      }),
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
};
