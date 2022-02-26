import React from 'react';
import { Text, StyleSheet } from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

function ErrorMessage({ error, visible }) {
	if (!error || !visible) return null;

	return <AppText style={styles.errorText}>{error}</AppText>;
}

const styles = StyleSheet.create({
	errorText: {
		color: defaultStyles.colors.danger,
		fontSize: 16,
	},
});

export default ErrorMessage;
