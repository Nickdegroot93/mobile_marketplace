import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({
	iconSize = 20,
	inputWidth = '100%',
	placeholder,
	iconName,
	...otherProps
}) {
	return (
		<View style={[styles.textInputContainer, { width: inputWidth }]}>
			{iconName && (
				<MaterialCommunityIcons
					name={iconName}
					size={iconSize}
					color={defaultStyles.colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				style={[defaultStyles.text, styles.textInput]}
				placeholder={placeholder}
				placeholderTextColor={defaultStyles.colors.medium}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textInputContainer: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 25,
		backgroundColor: defaultStyles.colors.light,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 10,
	},
	textInput: {
		width: '100%',
	},
});

export default AppTextInput;
