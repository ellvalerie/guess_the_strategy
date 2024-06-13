const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main_page.js", // Точка входа для сборки проекта

  output: {
    filename: "bandle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
    assetModuleFilename: "assets/images/[name]-[hash][ext]",
  },

  entry: "./src/double_choice.js",
  output: {
    filename: "double_bandle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
    assetModuleFilename: "assets/images/[name]-[hash][ext]",
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      { test: /\.(s*)css$/, use: [miniCss.loader, "css-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/main_page.html",
    }),
    new HtmlWebpackPlugin({
      filename: "double_choice.html",
      template: "./src/double_choice.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: "development", // Режим сборки
};

// const webpack = require('webpack')
// const miniCss = require('mini-css-extract-plugin');

// module.exports = {
//     mode: 'development',
//     entry: './src/main.js',
//     output: {
//         path: __dirname + '/public',
//         filename: 'bandle.js',
//         assetModuleFilename: 'assets/images/[name]-[hash][ext]'
//     },

//     module: {
//         rules: [
//           {
//             test: /\.(png|svg|jpg|jpeg|gif)$/i,
//             type: 'asset/resource',
//           },
//             { test: /\.(s*)css$/, use: [
//               miniCss.loader,

//               'css-loader',
//               'sass-loader'] },
//          ]
//       },
//       plugins: [
//         new miniCss({
//            filename: 'styles.css',
//         }),
//      ]
// }
