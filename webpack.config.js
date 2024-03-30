const path = require('path')

module.exports = {
mode: 'development',
  entry: ['./src/chat.js', './src/interface.js', './src/index.js', './src/signup.js', './src/login.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}