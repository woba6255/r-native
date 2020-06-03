// ENV
export const DEV_PLATFORM = 'pc-local'
export const IS_DEV = process.env.NODE_ENV !== 'production'

// CONFIG
export const config = {
	url: devCalcUrl(DEV_PLATFORM)
	/*IS_DEV
		? devCalcUrl(DEV_PLATFORM)
		: '' // TODO REMOVE USELESS CODE*/
}

function devCalcUrl(DEV_PLATFORM) {
	switch (DEV_PLATFORM) {
		case'android-local': return 'http://10.0.2.2:3001'
		case'android-devise-test': return 'http://10.0.2.2:3001'
		case'pc-local': return 'http://localhost:3001'
		default: return 'http://localhost:3001'
	}
}
