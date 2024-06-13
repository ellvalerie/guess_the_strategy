const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/double_choice.js", // Точка входа для сборки проекта
  output: {
    filename: "double_choice_bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
    assetModuleFilename: "assets/images/[name]-[hash][ext]",
  },

  // entry: "./src/double_choice.js",
  // output: {
  //   filename: "double_bandle.js", // Имя выходного файла сборки
  //   path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
  //   assetModuleFilename: "assets/images/[name]-[hash][ext]",
  // },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      { test: /\.css$/, use: [
        miniCss.loader,
        'css-loader']},
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
      filename: "double_choice.html",
      template: "./src/double_choice.html",
    }),
    new miniCss({
                 filename: 'double_choice_game.34.css',
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
