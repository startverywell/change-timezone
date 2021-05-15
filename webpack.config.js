const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  let PRODUCTION = false;
  let DEVTOOL;
  if (env.NODE_ENV !== 'production') {
    DEVTOOL = 'eval-source-map';
  } else {
    PRODUCTION = true;
  }

  return {
    devtool: DEVTOOL,
    entry: {
      main: './src/main.js',
      popup: './src/popup/addPopupDomEvents.js',
    },
    output: {
      publicPath: '',
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
