import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

import routes from '../navigation/routes';
import expoPushTokensApi from '../api/expoPushTokens';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	useEffect(() => {
		registerForPushNotifications();
	}, []);

	const registerForPushNotifications = async () => {
		try {
			const permission = await Notifications.getPermissionsAsync();
			if (!permission.granted) return;

			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(token.data);
		} catch (error) {
			console.log('Error getting a push token', error);
		}
	};
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarHideOnKeyboard: 'true',
			}}
		>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.POST}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							name="plus-circle"
							size={40}
							color={colors.white}
							onPress={() => navigation.navigate(routes.POST)}
						/>
					),
				})}
			/>
			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
