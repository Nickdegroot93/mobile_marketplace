import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen({ route }) {
	const { listing } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color={colors.white} size={35} />
			</View>

			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					color={colors.white}
					size={35}
				/>
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={{ uri: listing.images[0].url }}
			></Image>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	closeIcon: {
		position: 'absolute',
		top: 30,
		left: 30,
	},
	deleteIcon: {
		position: 'absolute',
		top: 30,
		right: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default ViewImageScreen;
