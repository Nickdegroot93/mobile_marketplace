import React, { useState } from 'react';
import {
	Alert,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';

import Screen from './app/components/Screen';
import colors from './app/config/colors';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

import { StatusBar } from 'expo-status-bar';

import ListingEditScreen from './app/screens/ListingEditScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import ViewImageScreen from './app/screens/ViewImageScreen';

import MyAccountScreen from './app/screens/MyAccountScreen';
import ImageInputList from './app/components/ImageInputList';
import ImageInput from './app/components/ImageInput';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import UploadScreen from './app/screens/UploadScreen';
import OfflineBar from './app/components/OfflineBar';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineBar />
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
