const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
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
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
