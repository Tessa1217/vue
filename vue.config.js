const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "../src/main/resources/static"),
  // indexPath: path.resolve(__dirname, "../src/main/resources/static/index.html"),
  devServer: {
    port: 9000,
    proxy: "http://localhost:8080",
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
});
