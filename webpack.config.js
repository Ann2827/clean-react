const path = require('path');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  entry: './src/index.tsx',
  mode: env,
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'build.js',
  },
  devtool: 'source-map',
  devServer: {
    // host: 'localhost',
    // port: 3000,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/',
    },
    // allowedHosts: 'all',
    // hot: false,
    liveReload: true,
    // client: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   "@babel/preset-env",
            //   "@babel/preset-react",
            //   "@babel/preset-typescript"
            // ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-nullish-coalescing-operator"
            ]
          }
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ProgressPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.tsx', '.ts', '.jsx'],
    modules: [
      'node_modules',
    ],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
};
