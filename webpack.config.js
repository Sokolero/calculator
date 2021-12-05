const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
