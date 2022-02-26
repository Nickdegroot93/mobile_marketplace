import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import Icon from './Icon';
import AppText from './AppText';

function CategoryPickerItem({ label, onPress, backgroundColor, name }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon name={name} size={70} backgroundColor={backgroundColor} />
			<AppText style={styles.label}>{label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: 'center',
		width: '33%',
	},
	label: {
		fontSize: 16,
		fontWeight: '500',
		marginTop: 4,
		textAlign: 'center',
	},
});

export default CategoryPickerItem;
