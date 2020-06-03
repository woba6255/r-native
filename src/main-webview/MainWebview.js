import { env } from '../../env'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React, { createRef } from 'react'
import { db } from './db_emulator'
import { inject } from './inject'

export function MainWebview() {
	const params = 'test=none'
	const HTMLPathAndroid = 'file:///android_asset/Web.bundle/loader.html'
	const injectedJS = `
	const link = document.getElementById('redirect');
    link.href = './build/index.html?${params}';
    link.click();
    `
	const ref = createRef()

	const webview = env.USE_DEV_SERVER
		? {
			uri: env.DEV_SERVER,
			injectJS: ''
		}
		: {
			uri: HTMLPathAndroid,
			injectJS: injectedJS
		}


	async function onMessage(message) {
		const json = JSON.parse(message.nativeEvent.data)
		const response = await db(json.key, json.hash, json.data)
		inject(ref, json.hash, response)
	}

	return (
		<>
			<View style={{width: '100%', height: '100%'}}>
				<WebView
					ref={ref}
					injectedJavaScript={webview.injectJS}
					source={{
						uri: webview.uri
					}}
					originWhitelist={['*']}
					allowFileAccess={true}
					onMessage={onMessage}
				/>
			</View>
		</>
	)
}
