const path = require('path')

module.exports = {
	webpack: function(config, env) {
		config.resolve.alias['~'] = path.resolve(__dirname, 'src')
		return config
	},
}
