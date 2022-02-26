import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import defaultStyles from '../config/styles';

const AppText = ({ children, style, ...otherProps }) => {
	return (
		<Text {...otherProps} style={[styles.text, style]}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: defaultStyles.text,
});

export default AppText;
