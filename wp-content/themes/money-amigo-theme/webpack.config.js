module.exports = function(main_js_path, dist_js_path) {
	return {
		externals: {
			'ramda': 'R'
		},
		entry: {
		  functions: main_js_path + 'micorriza.js',
		//   canvas: main_js_path + 'canvas.js',
		  //'admin-functions': main_js_path + 'micorriza-admin.js',
		},
		module: {
		  loaders: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel',
		      query: {
		        presets: ['es2015']
		      }
		    }
		  ]
		},
		output: {
			path: './'+ dist_js_path +'/',
			publicPath: './'+ dist_js_path +'/',
			filename: '[name].js',
	//		chunkFilename: '[id].bundle.js'
		},
		devtool: false ? 'source-map' : 'none'
	};
}
