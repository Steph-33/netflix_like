// module.exports = {
    
//     entry : './index.js',

//     output : {
//         filename : 'bundle.js'
//     },

//     mode : 'production'

//   }

  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
      ]
    }
  }; 
