const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader' disable eslint terminal warnings on develop mode
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: 'module',
                auto: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          }, 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: path.resolve(__dirname, '..', './public/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
};
