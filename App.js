import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors'
import { env } from './env'


const App: () => React$Node = () => {
	const params = 'platform=' + Platform.OS
	const HTMLAndroidPath = 'file:///android_asset/Web.bundle/loader.html'
	const injectedJS = `
async function a() {
	const link = document.getElementById('redirect');
      const link = document.getElementById('redirect');
      link.href = './build/index.html?${params}';
      link.click();
    `

	const platform = {HTMLPath: HTMLAndroidPath}

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
			<View>
				<View style={{width: '100%', height: '100%'}}>
					<Text>{String(env.DEV_SERVER)}</Text>
					<WebView
						injectedJavaScript={webview.injectJS}
						source={webview.uri/*{
							uri: 'http://192.168.1.102:3001/metrics',
							method: 'GET'
						}*/}
						originWhitelist={['*']}
						allowFileAccess={true}
						// onMessage={onMessage}
					/>
				</View>
			</View>
		</>
	)
}

export default App
