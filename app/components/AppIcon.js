import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppIcon({
	name,
	iconColor = '#fff',
	backgroundColor = '#000',
	size = 40,
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
		</View>
	);
}

export default AppIcon;
