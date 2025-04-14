/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@messages": path.resolve(__dirname, "src/messages"),
      "@models": path.resolve(__dirname, "src/models"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
}