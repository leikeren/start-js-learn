const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { merge } = require('webpack-merge');

// 导入其他变量
const prodConfig  = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');
// 定义对象，保存 base 配置信息
const commonConfig = {
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".json", ".ts", ".jsx", ".vue"],
        alias: {
            '@': resolveApp('./src')
        }
    },
    output: {
      filename: "js/build.js",
      path: resolveApp('./dist')
      // publicPath: './'
      // assetModuleFilename: "img/[name].[hash:4][ext]"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                esModule: false,
              },
            },
            { loader: "postcss-loader" },
          ],
        },
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "postcss-loader" },
            { loader: "less-loader" },
          ],
        },
        {
          test: /\.vue$/,
          use: [{ loader: "vue-loader" }],
        },
        // {
        //   test: /\.(png|jpe?g|gif)$/i,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         esModule: false,
        //         name: '[path][name].[hash:8].[ext]'
        //       }
        //     }
        //   ]
        //  },
        // {
        //   test: /\.(png|jpe?g|gif)$/i,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         esModule: false,
        //         name: '[path][name].[hash:8].[ext]',
        //         limit: 40 * 1024,
        //       }
        //     }
        //   ]
        // }
        // {  // 相当于 file-loader
        //   test: /\.(png|svg|gif|jpe?g)$/i,
        //   type: 'asset/resource',
        //   generator: {
        //     filename: "img/[name].[hash:4][ext]"
        //   }
        // }
        // 相当于 url-loader
        {
          test: /\.(png|svg|gif|jpe?g)$/i,
          type: "asset",
          generator: {
            filename: "[path][name].[hash:8].[ext]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 40 * 1024,
            },
          },
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "proxy",
        // filename: "assets/index.html",
        template: "./public/index.html",
      }),
      new VueLoaderPlugin(),
    ],
  };

module.exports = (env) => {
  console.log(env, "<-------------------");
  const isProduction = env.production;
  const config = isProduction ? prodConfig : devConfig;
  console.log(isProduction, '00000000')
  return merge(config, commonConfig);
};
