import { merge } from "webpack-merge"
import common from "./webpack.common.js"
import paths from "./paths.js"

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: paths.build,
    },
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    compress: true,
    hot: true,
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
        ],
      },
    ],
  },
})
