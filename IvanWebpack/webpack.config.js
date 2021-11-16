const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");// AMD
// import path from "path"; // UMD

// export default path; // UMD
module.exports = { // AMD
	mode: "development",
	devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
		open: true,
    port: 9000,
  },
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, "src"),
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { targets: "defaults, ie 11" }]
					],
					plugins: [[
						"@babel/plugin-proposal-decorators", {
							decoratorsBeforeExport: true
						}]]
				}
			}]
		}, {
			test: /\.tsx?$/,
			loader: "ts-loader"
		}, {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		}, {
			test: /\.html$/i,
			use: ["html-loader"]
		}, {
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		},]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Cursor Webpack"
		})
	]
}