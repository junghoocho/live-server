const path = require('path');
//const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: {
    app: ["./live-server.js"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "live-server.js"
  },
  mode: "production",
//  externals: [nodeExternals()],
};
