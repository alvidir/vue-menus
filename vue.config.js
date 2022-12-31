const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue"));
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat all tags with a dash as custom elements
          //isCustomElement: tag => tag.includes('-'),
        },
      }));
  },
});
