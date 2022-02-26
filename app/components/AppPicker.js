import React from 'react';
import {
	Modal,
	FlatList,
	Button,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerComponent from './PickerComponent';

function AppPicker({
	onSelectItem,
	selectedItem,
	placeholder,
	iconSize = 20,
	items,
	iconName,
	inputWidth = '100%',
	numberOfColumns = 1,
	PickerItemComponent = PickerComponent,
}) {
	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<>
			<TouchableWithoutFeedback
				onPress={() => setModalVisible((prevState) => !prevState)}
			>
				<View style={[styles.textInputContainer, { width: inputWidth }]}>
					{iconName && (
						<MaterialCommunityIcons
							name={iconName}
							size={iconSize}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}

					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={iconSize}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="close modal"
						onPress={() => setModalVisible((prevState) => !prevState)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								label={item.label}
								name={item.icon}
								backgroundColor={item.backgroundColor}
								onPress={() => {
									onSelectItem(item);
									setModalVisible((prevState) => !prevState);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	textInputContainer: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 25,
		backgroundColor: defaultStyles.colors.light,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
});

export default AppPicker;
