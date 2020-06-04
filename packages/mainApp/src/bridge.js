export default class {
	static init() {
		window.ReactNativeWebViewResponseRR = (da, da2) => {
			window.ReactNativeWebViewResponse[da](JSON.parse(da2))

		}
	}
}

export function DEBUG1(value) {
	document.getElementById('DEBUG').innerHTML = `
    <p>${JSON.stringify(value)}</p>
    `
}


export async function bridgeDialog(key, data = '') {
	if (!window.ReactNativeWebView) {
		throw Error('[ERR] Used outside React Native Webview!')
	}


	return await new Promise(resolve => {
		const hash = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7)
		const json = JSON.stringify({key, data, hash})

		window.ReactNativeWebView.postMessage(json)
		// const interval = setInterval(() => {
		// 	window.ReactNativeWebView.postMessage(json)
		// }, 750)
		if (!window.ReactNativeWebViewResponse) {
			window.ReactNativeWebViewResponse = {}
		}

		window.ReactNativeWebViewResponse[hash] = (response) => {
			resolve(response)
			// clearInterval(interval)
			// window.alert(JSON.stringify(response))
			window.ReactNativeWebViewResponse[hash] = null

		}
	})
}
