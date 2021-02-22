const path = require('path');

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
  plugins: [],
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
