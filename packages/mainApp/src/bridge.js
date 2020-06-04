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
