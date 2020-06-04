

export function inject(ref, hash, data) {
	const js = `
	setTimeout(() => {
        window.ReactNativeWebViewResponse.${hash}(${JSON.stringify(data)}); void(0)
	}, 100)
	`
	console.log(data)
	ref.current.injectJavaScript(js)
}
