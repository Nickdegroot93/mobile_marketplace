import React, { useEffect } from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Image,
	Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../config/styles';

function ImageInput({ size = 40, onChangeImage, imageUri }) {
	// Requesting permission to access the photo library
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) {
			alert('Permission to access media library was denied');
		}
	};

	// Pick a new image or remove existing image by passing either a uri or null
	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('Delete', 'Are you sure you want to delete this image?', [
				{
					text: 'No',
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: () => {
						onChangeImage(null);
					},
				},
			]);
	};

	// Select an image from the image library
	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				quality: 0.5,
			});
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View
				style={[
					styles.container,
					{
						width: size * 2,
						height: size * 2,
						borderRadius: size / 4,
					},
				]}
			>
				{imageUri ? (
					<Image source={{ uri: imageUri }} style={styles.image} />
				) : (
					<MaterialCommunityIcons
						name="camera"
						color={defaultStyles.colors.medium}
						size={size}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	icon: {},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default ImageInput;
