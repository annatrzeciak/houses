module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    proxy: {
      "/api": {
        target: 'http://mr-test-backend.sadek.usermd.net',
        pathRewrite: { "^/api": "" },
      },
    },
    disableHostCheck: true,
    host: "0.0.0.0",
  },
  css: {
    sourceMap: true,
  },
};
