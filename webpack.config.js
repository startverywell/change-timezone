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
      'pop-up': './src/popup/addExtensionPopupEvents.js',
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
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
};
