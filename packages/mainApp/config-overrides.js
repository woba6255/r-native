const path = require('path')

module.exports = {
	webpack: function(config, env) {
		config.resolve.alias['~'] = path.resolve(__dirname, 'src')
		config.output.path = path.join(__dirname, '..', '..', 'html', 'Web.bundle', 'build')
		config.output.publicPath = './'
		return config
	},
}
