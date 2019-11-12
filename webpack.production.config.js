const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',
  mode: 'production',
  entry: [
    'babel-polyfill',
    'react',
    'react-dom',
    './main.js'
  ],
  context: resolve(__dirname, 'app'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },
  
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.html`,
      filename: 'index.html',
      inject: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new MiniCssExtractPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: './vendors', to: 'vendors' }]),
  ],

  module: {
    rules: [
      //  {
      //   enforce: "pre",
      //   test: /\.(es6|jsx|js)$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // }, 
      {
        test: /\.(jsx|js|es6)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]

      },
      {
          test: /\.css$/,
          use: [
              "style-loader",
              "css-loader",
          ],
      },
      {
          test: /\.(scss|sass)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
              'style-loader',
              'css-loader',
              { loader: 'sass-loader', options: { sourceMap: true } },
          ],
      },
      { test: /\.(png|jpg|gif)$/, use: 'file-loader' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
    ]
  },
  resolve: {
        // resolve.alias could be useful for resolving certain modules easily
        extensions: ['.js', '.jsx', '.es6'],
    }
};

module.exports = config;
