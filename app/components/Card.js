import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subtitle, imageUrl, thumbnailUrl, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.cardContainer}>
				{/* <Image source={{ uri: imageUrl }} style={styles.cardImage} /> */}
				<Image
					style={styles.cardImage}
					preview={{ uri: thumbnailUrl }}
					tint="light"
					uri={imageUrl}
				/>
				<View style={styles.cardInfo}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subtitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		width: '100%',
		marginBottom: 20,
		borderRadius: 15,
		overflow: 'hidden',
		backgroundColor: colors.white,
	},
	cardImage: {
		width: '100%',
		height: 200,
	},
	cardInfo: {
		padding: 20,
	},
	title: {
		marginBottom: 7,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold',
	},
});

export default Card;
