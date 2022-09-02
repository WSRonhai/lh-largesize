const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局sass变量
        //sass-loader 新版本
        prependData: `@import "~@/assets/scss/index.scss";`,
      },
    },
  },
  devServer: {
    host: "localhost",
    open: true,
  },
});
