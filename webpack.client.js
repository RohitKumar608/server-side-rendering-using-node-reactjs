const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./build",
  },
  devServer: {
    contentBase: "public",
    overlay: true,
    stats: {
      colors: true
    }
},
devtool: "source-map",
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
						loader: 'file-loader',
						options: {
              name: 'styles.min.css',
              outputPath: 'assets/css/'
						}
          },
          {
            loader: 'extract-loader'
        },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,  "css-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [ 
    new MiniCssExtractPlugin({
    filename: "styles.min.css",
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true
  }),
],
resolve: {
  extensions: [".js", ".jsx", ".scss", ".css"],
},
}
