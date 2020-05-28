const path = require('path');

module.exports = {
  mode: 'development',
  entry: 'main.js',
  output: {
    filename: 'bundle-front.js',
    path: path.resolve(__dirname, 'index'),
  },
};