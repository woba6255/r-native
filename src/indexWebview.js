import { env } from '../env'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'

export function IndexWebview() {
	const params = 'platform=' + Platform.OS
	const HTMLPathAndroid = 'file:///android_asset/Web.bundle/loader.html'
	const injectedJS = `
	const link = document.getElementById('redirect');
    link.href = './build/index.html?${params}';
    link.click();
    `

	const platform = {HTMLPath: HTMLPathAndroid}

	const webview = {
		uri: env.IS_DEV
			? env.DEV_SERVER
			: platform.HTMLPath
		,

		injectJS: env.IS_DEV
			? ''
			: injectedJS
	}


	return (
		<>
			<View style={{width: '100%', height: '100%'}}>
				<Text>{JSON.stringify(webview)}</Text>
				<WebView
					injectedJavaScript={webview.injectJS}
					// automaticallyAdjustContentInsets={false}
					source={{
						uri: webview.uri
					}}
					originWhitelist={['*']}
					allowFileAccess={true}
					// onMessage={onMessage}
				/>
			</View>
		</>
	)
}
