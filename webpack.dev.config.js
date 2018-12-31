var path=require('path');
var webpack=require('webpack');
var CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'site.js'
	},
  optimization: {
    minimize: false,
  },
	mode: "development",    
  plugins: [
		new CleanWebpackPlugin(['./dist'],{
			root: __dirname,
			verbose: true,
			dry: false,
			watch: true
		}),
	],
  devtool:'eval-source-map',
  resolve:{
  	extensions:['.js','.jsx'],
  	modules:[
  		path.join(__dirname, './src'),
  		path.join(__dirname, './src/action'),
  		path.join(__dirname, './src/store'),
  		path.join(__dirname, './src/home'),
      path.join(__dirname, './src/properties'),
      path.join(__dirname, './src/contact'),
  		path.join(__dirname, './resource'),
  		path.join(__dirname, './resource/react'),
  		'node_modules'
  	]
  },
  node: {
    fs: 'empty'
  },
  module:{
  	rules:[
	  	{
	  		test: /\.jsx?$/,
	  		loader: "babel-loader",
	  		exclude: /node_modules/,
	  		query:{
	  			presets:['env','react','stage-2']
	  		}

	  	},
			
	  	{
	  		test: /\.css?$/,
	  		loader: "css-loader",
	  		exclude: /node_modules/
	  	}
  	]
  }
};