const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    ICAScrambo: './src/ICAScrambo.ts',
    cli: './src/cli.ts'
  },
  target: 'node',
  mode: 'none',
  plugins: [
    new UglifyJsPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: 'ICAScrambo',
    libraryTarget: 'umd',
    globalObject: "typeof self !== \"undefined\" ? self : this"
  }
};
