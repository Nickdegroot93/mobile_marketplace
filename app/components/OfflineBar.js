import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Platform } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import AppText from './AppText';
import colors from '../config/colors';

function OfflineBar() {
	const netInfo = useNetInfo();

	if (
		netInfo.isInternetReachable === true ||
		netInfo.isInternetReachable === null
	)
		return null;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.infoBar}>
				<AppText style={styles.message}>No Internet Connection</AppText>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === 'android' ? 30 : 0,
	},
	infoBar: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary,
		height: 50,
	},
	message: {
		color: colors.white,
	},
});

export default OfflineBar;
