import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	// Use ref to get access to Scrollview methods
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() =>
					scrollView.current.scrollToEnd({ animated: true })
				}
			>
				<View style={styles.container}>
					{imageUris.map((uri, index) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 10,
	},
	image: {
		marginRight: 10,
	},
});

export default ImageInputList;
