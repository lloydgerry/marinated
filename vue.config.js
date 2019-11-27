module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://[::1]:5000',
      }
    }
  }
}

// const configureAPI = require('./src/server')

// module.exports = {
//   devServer: {
//     before: configureAPI
//   }
// }