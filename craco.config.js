/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
}