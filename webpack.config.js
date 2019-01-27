const path = require('path');

module.exports = {
	entry :{
		app: "./app/assets/scripts/app.js",
	output: {
		path: path.resolve(__dirname,"./app/temp/scripts"),
		filename: "[name].js"
	}
}

module: {
	loaders:[
	{
		loader: 'babel-loader',
		query:{
			presets : ['env']
		},
		test:/\.js$/,
		exclude: /node-modules/
	}
	]
}