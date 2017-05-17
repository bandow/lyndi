// module.exports = {
//     plugins: [
//         require('autoprefixer')({
//             browsers: 'last 5 version' //前五种浏览器版本
//         })
//     ]
// };
module.exports = {
  plugins: [
    require('autoprefixer')({browsers:'ios >= 8'})
  ]
}