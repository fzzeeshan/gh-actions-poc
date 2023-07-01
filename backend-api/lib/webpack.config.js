const { resolve } = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/utils.ts",
  output: {
    filename: `bundle.${packageJson.version}.js`,
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        VERSION: JSON.stringify(packageJson.version),
      },
    }),
    // ... your other plugins
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  mode: "production",
};
