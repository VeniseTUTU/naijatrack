var webpack = require('webpack');
var path = require('path');


const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body',
    title: 'Caching',
 
});

module.exports = () => {
    
    
return{
 entry: __dirname + '/src/index.js',
 resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
 },
 module: {
   rules:[
     {
       test: /\.js$/,
       exclude: [/node_modules/],
       loader: 'babel-loader'
       
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
       loader:  'file-loader',
       
     },
     {
       test: /\.(png|woff|woff2|eot|ttf|svg)$/,
       loader: 'url-loader?limit=100000',
       
     },
     
     {
        test: /\.(css|scss)$/i,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
   ]
  },
  output:{
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
   path: path.resolve(__dirname, 'build'),
   publicPath: '/'
  },
  optimization:{
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
      
    },
  },
  devServer:{
    historyApiFallback: true,
    disableHostCheck: true
  },
  node:{
    fs:'empty'
  },
  
  plugins: [
    
    new webpack.DefinePlugin({
      //development vars
      'process.env.USE_BASE_URL_ENV': JSON.stringify('http://localhost:8080/src/'),
      'process.env.API_URL_DEV': JSON.stringify('http://127.0.0.1/api'),
      
      //production vars 
      'process.env.USE_BASE_URL': JSON.stringify('http://www.naijatrack.com.s3-website-us-east-1.amazonaws.com/src/'),
      'process.env.API_URL': JSON.stringify('https://sjinetapi-24.herokuapp.com'), 
      
      }),
   
    HTMLWebpackPluginConfig
  
]
}
};