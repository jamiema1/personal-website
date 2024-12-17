const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
}