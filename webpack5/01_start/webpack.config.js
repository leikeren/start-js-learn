const path = require("path");
const { DefinePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: "development",
  devtool: 'cheap-source-map',
  entry: "./src/index.js",
  output: {
    filename: "js/build.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: './'
    // assetModuleFilename: "img/[name].[hash:4][ext]"
  },
  target: 'web',
  devServer: {
    hot: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
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
        use: [ { loader: 'vue-loader' } ]
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
        }
      },
      { 
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        title: "proxy",
        // filename: "assets/index.html",
        template: "./public/index.html"
      }
    ),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: 'public',
          globOptions: {
            // dot: true,
            ignore:["**/index.html"]
          }
         }
      ]
    }),
    new VueLoaderPlugin()
  ]
};
