module.exports =  {
    mode: "development",
    // devtool: "source-map",
    target: "web",
    devServer: {
      hot: true,
      proxy: {
        "/api": {
          target: "https://api.github.com",
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
        },
      },
  }
};
