import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false, headerBackTitle: 'Welcome' }}
		/>
		<Stack.Screen
			name="Login"
			component={LoginScreen}
			options={{ title: 'Login' }}
		/>
		<Stack.Screen
			name="Register"
			component={RegisterScreen}
			options={{ title: 'Register' }}
		/>
	</Stack.Navigator>
);

export default AuthNavigator;
