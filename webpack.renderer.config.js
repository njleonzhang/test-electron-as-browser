const rules = require('./webpack.rules');
const path = require('path')

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  }, 
  {
    test: /\.jsx?$/,
    use: 'babel-loader',
    include: [path.resolve(__dirname, './src')]
  }
);

module.exports = {
  // Put your normal webpack config below here
  target: ['web'],
  module: {
    rules,
  },
};
