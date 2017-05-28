var path = require("path");

module.exports = {
  devtool: "cheap-eval-source-map",
  devServer: {
    port: 9000,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        pathRewrite: {"^/" : ""}
      }
    }
  },
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      { 
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};
