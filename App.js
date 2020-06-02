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
	fetch('http://www.mocky.io/v2/5ed523d0330000d1bdf7a848')
		.then((response) => response.json())
		.then((json) => link.innerText = JSON.stringify(json))
		.catch((error) => link.innerText = JSON.stringify('NOT'))
      // const link = document.getElementById('redirect');
      // link.href = './build/index.html?${params}';
      // link.click();
}
a()
    `


	return (
		<>
			<View>
				<View style={{width: '100%', height: '100%'}}>
					<Text>{env.IS_DEV}</Text>
					<WebView
						injectedJavaScript={injectedJS}
						source={{uri: HTMLAndroidPath}}
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
