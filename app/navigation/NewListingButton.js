import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ name, size, color, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name={name} size={size} color={color} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		height: 80,
		width: 80,
		borderColor: colors.white,
		borderWidth: 10,
		borderRadius: 40,
		bottom: 20,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default NewListingButton;
