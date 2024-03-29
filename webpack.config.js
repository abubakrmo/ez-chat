const path = require('path')

module.exports = {
mode: 'development',
  entry: ['./src/chat.js', './src/interface.js', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}