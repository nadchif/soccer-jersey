const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'soccer-jersey': './src/index.umd.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'SoccerJersey',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new webpack.BannerPlugin({
      banner: `
Source: https://nadchif.github.io/soccer-jersey/
The version of the package is: ${require('./package.json').version}
      `,
    }),
  ],
  module: {
    rules: [{test: /\.tsx?$/, loader: 'ts-loader'}],
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 8000,
    watchContentBase: true,
    watchOptions: {
      ignored: ['/node_modules/'],
    },
  },
};
