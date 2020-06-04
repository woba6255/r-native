

export function inject(ref, hash, data) {
	const js = `
        window.ReactNativeWebViewResponseRR('${hash}', '${JSON.stringify(data)}'); void(0)
	`
	// console.log(js)
	ref.current.injectJavaScript(js)
}
