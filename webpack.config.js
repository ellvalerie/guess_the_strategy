const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/triple_choice.js", // Точка входа для сборки проекта
  output: {
    filename: "triple_choice_bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]')
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: 'file-loader'
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
      filename: "triple_choice.html",
      template: "./src/triple_choice.html",
    }),
    new miniCss({
                 filename: 'triple_choice_game.34.css',
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
