const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports =  {
    mode: "production",
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            globOptions: {
              // dot: true,
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
    ],
  };
