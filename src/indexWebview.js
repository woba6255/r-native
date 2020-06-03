import { env } from '../env'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'

export function IndexWebview() {
	const params = 'test=none'
	const HTMLPathAndroid = 'file:///android_asset/Web.bundle/loader.html'
	const injectedJS = `
	const link = document.getElementById('redirect');
    link.href = './build/index.html?${params}';
    link.click();
    `


	const webview = env.USE_DEV_SERVER
		? {
			uri: env.DEV_SERVER,
			injectJS: ''
		}
		: {
			uri: HTMLPathAndroid,
			injectJS: injectedJS
		}


	return (
		<>
			<View style={{width: '100%', height: '100%'}}>
				<WebView
					injectedJavaScript={webview.injectJS}
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
