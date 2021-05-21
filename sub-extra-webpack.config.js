const WebpackAssetsManifest = require("webpack-assets-manifest");
console.log("1111111111111111111111111111111");
module.exports = {
  optimization: {
    runtimeChunk: false,
  },
  plugins: [new WebpackAssetsManifest()],
};
