const path = require("path")
const webpackNodeExternals = require("webpack-node-externals")

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  entry: "./src/index.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
  },
  devServer: {
    inline: false,
    contentBase: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              { plugins: ["@babel/plugin-proposal-class-properties"] },
            ],
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
  },

  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()],
}
