import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

function UploadScreen({ progress = 0, visible = false, onDone }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 && (
					<Progress.Bar
						progress={progress}
						width={200}
						color={colors.primary}
					/>
				)}
				{progress === 1 && (
					<View style={styles.animationBox}>
						<LottieView
							source={require('../assets/animations/completedanimation.json')}
							autoPlay
							loop={false}
							onAnimationFinish={onDone}
							style={styles.animation}
						/>
						<AppText>Your item has been listed!</AppText>
					</View>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	animation: {
		width: 200,
		height: 200,
	},
	animationBox: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});

export default UploadScreen;
