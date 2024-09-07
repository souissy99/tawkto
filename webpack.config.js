"use strict";

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { VuetifyLoaderPlugin } = require("vuetify-loader");
const dataObj = require("./data/data.json");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      // svg loader
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          outputPath: "assets/icons",
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
            },
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    historyApiFallback: true,
    before: function (app, server, compiler) {
      app.get("/api/categories", function (req, res) {
        res.json(dataObj.categories);
      });

      app.get("/api/category/*", function (req, res) {
        res.json(dataObj.articles);
      });

      app.get("/api/author/*", function (req, res) {
        let author = {};
        const authorId = req.params["0"];

        for (let index = 0; index < dataObj.authors.length; index++) {
          if (dataObj.authors[index].id === authorId) {
            author = dataObj.authors[index];
            break;
          }
        }
        res.json(author);
      });

      app.get("/api/search/*", function (req, res) {
        res.json(dataObj.articles);
      });
    },
  },
};
