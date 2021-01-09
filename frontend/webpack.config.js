const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const pathName = path.resolve(__dirname, "./src");
const entry = path.resolve(__dirname, "./src/index.js");
console.log("path is", pathName, entry);

module.exports = {
  devServer: {
    contentBase: pathName,
    historyApiFallback: true,
  },
  entry: entry,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime",
            ],
            //npm install --save-dev @babel/plugin-transform-runtime
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  output: {
    filename: "bundle.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
