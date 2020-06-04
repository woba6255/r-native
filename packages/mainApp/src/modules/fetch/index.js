export async function bridge(key, data = '') {
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
			window.ReactNativeWebViewResponse[hash] = null

		}
	})
}


// import { config } from "config"
//
//
// export default {
// 	async GET(path, json = true, url = config.url) {
// 		try {
// 			const response = await fetch(url + path, {
// 				method: 'GET',
// 			});
//
// 			return json === true
// 				? await response.json()
// 				: response
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	},
// 	async DELETE(path, json = true, url = config.url) {
// 		try {
// 			const response = await fetch(url + path, {
// 				method: 'DELETE',
// 			});
//
// 			return json === true
// 				? await response.json()
// 				: response
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	},
// 	async POST(path, data, json = true, url = config.url) {
// 		try {
// 			const response = await fetch(url + path, {
// 				method: 'POST',
// 				body: JSON.stringify(data),
// 				headers: {
// 					"Content-type": "application/json; charset=UTF-8"
// 				}
// 			});
//
// 			return json === true
// 				? await response.json()
// 				: response
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	},
// 	async PUT(path, data, json = true, url = config.url) {
// 		try {
// 			const response = await fetch(url + path, {
// 				method: 'PATCH',
// 				body: JSON.stringify(data),
// 				headers: {
// 					"Content-type": "application/json; charset=UTF-8"
// 				}
// 			});
//
// 			return json === true
// 				? await response.json()
// 				: response
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	}
// }
