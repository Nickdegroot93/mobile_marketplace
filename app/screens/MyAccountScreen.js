import { FlatList, StyleSheet, View } from 'react-native';

import useAuth from '../auth/useAuth';
import routes from '../navigation/routes';
import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import AppIcon from '../components/AppIcon';
import ListItemSeperator from '../components/lists/ListItemSeperator';

const menuItems = [
	{
		id: 1,
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		id: 2,
		targetScreen: routes.MESSAGES,
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

function MyAccountScreen({ navigation }) {
	const { user, logOut } = useAuth();

	return (
		<Screen style={styles.screen}>
			<ListItem
				title={user.name}
				subtitle={user.email}
				image={require('../assets/mosh.jpg')}
				style={styles.list}
			/>
			<View>
				<FlatList
					style={styles.list}
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<AppIcon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={() => <ListItemSeperator />}
				/>
			</View>
			<ListItem
				onPress={logOut}
				style={{ backgroundColor: '#fff' }}
				title="Logout"
				IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	list: {
		backgroundColor: colors.white,
		marginVertical: 20,
	},
});

export default MyAccountScreen;
