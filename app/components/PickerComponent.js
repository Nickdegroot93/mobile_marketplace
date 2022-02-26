import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

function PickerComponent({ label, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<AppText>{label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});

export default PickerComponent;
