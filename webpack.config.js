const path = require('path');

const plugin = require('html-webpack-plugin');
const pluginConfig = new plugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.(js|jsx)$/, 
				use: ['babel-loader'], 
				exclude: /node_modules/ 
			},
			{ 
				test: /\.jsx$/, 
				use: ['babel-loader', 'eslint-loader'], 
				exclude: /node_modules/ }
		]
	},
	plugins: [pluginConfig]
}