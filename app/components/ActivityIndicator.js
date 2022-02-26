import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;

	return (
		<LottieView
			source={require('../assets/animations/loadingspinner.json')}
			autoPlay
			loop
		/>
	);
}

export default ActivityIndicator;