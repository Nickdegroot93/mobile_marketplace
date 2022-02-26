import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary' }) {
	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		borderRadius: 25,
		padding: 15,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	text: {
		fontSize: 18,
		color: colors.white,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});

export default AppButton;
