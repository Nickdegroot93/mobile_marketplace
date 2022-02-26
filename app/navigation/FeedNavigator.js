import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../navigation/routes';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			presentation: 'modal',
			headerShown: false,
		}}
	>
		<Stack.Screen name={routes.LISTING} component={ListingsScreen} />
		<Stack.Screen
			name={routes.LISTING_DETAILS}
			component={ListingDetailsScreen}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
