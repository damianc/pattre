const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'pattre.js',
    library: {
      name: 'Pattern',
      type: 'var',
      export: 'default'
    }
  },
  resolve: {
    alias: {
      '@words': path.resolve(__dirname, 'src/words'),
      '@pseudo-words': path.resolve(__dirname, 'src/pseudo-words'),
      '@anchors': path.resolve(__dirname, 'src/anchors'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
};