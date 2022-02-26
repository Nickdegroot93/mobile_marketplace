import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({
	title,
	subtitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	style,
	showChevron,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText numberOfLines={1} style={styles.title}>
							{title}
						</AppText>
						{subtitle && (
							<AppText numberOfLines={2} style={styles.subtitle}>
								{subtitle}
							</AppText>
						)}
					</View>
					{showChevron && (
						<MaterialCommunityIcons
							size={20}
							style={styles.chevron}
							name="chevron-right"
						/>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		alignItems: 'center',
	},
	chevron: {
		marginLeft: 'auto',
		color: colors.medium,
	},
	detailsContainer: {
		marginLeft: 10,
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: '500',
	},
	subtitle: {
		color: colors.medium,
	},
});
export default ListItem;
