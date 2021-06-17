const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  let PRODUCTION = false;
  let DEVTOOL;
  let MODE;
  if (env.NODE_ENV !== 'production') {
    DEVTOOL = 'eval-source-map';
    MODE = 'development';
  } else {
    PRODUCTION = true;
    MODE = 'production';
  }

  return {
    mode: MODE,
    devtool: DEVTOOL,
    entry: {
      main: './src/main.js',
      popup: './src/popup/registerDOMEvents.js',
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
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
