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

		const {hash, key, data} = json
		const response = await db(key, hash, data)
		const inj = () => inject(ref, hash, response)

		inj()
		}

	return (
		<>
			<View style={{width: '100%', height: '100%', flex: 1}}>
				<WebView
					ref={ref}
					injectedJavaScript={webview.injectJS}
					source={{
						uri: webview.uri
					}}
					originWhitelist={['*']}
					allowFileAccess={true}
					javaScriptEnabled={true}
					onMessage={onMessage}
					onError={(log) => console.log(log)}
				/>
			</View>
		</>
	)
}
