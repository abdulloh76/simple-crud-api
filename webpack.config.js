const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};
