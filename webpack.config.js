const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
    chat: './src/components/Chat/Chat/index.ts',
  },
  devServer: {
    port: 3000,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  performance: {
    maxEntrypointSize: 10000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      favicon: './public/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
