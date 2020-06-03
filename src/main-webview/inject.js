

export function inject(ref, hash, data) {
	const js = `
		window.ReactNativeWebViewResponse.${hash}(${String(JSON.stringify(data))}); void(0)
	`
	console.log(data)
	ref.current.injectJavaScript(js)
}
