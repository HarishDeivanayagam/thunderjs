const path = require('path');

module.exports = {
  entry: {
    'Index': './src/splitloaders/IndexLoader.ts',
    'About': './src/splitloaders/AboutLoader.ts',
    'NotFound': './src/splitloaders/NotFoundLoader.ts'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: "[name].js",
    path: path.resolve('./', 'static'),
  },
};
