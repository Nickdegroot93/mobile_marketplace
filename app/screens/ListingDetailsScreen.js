import React from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Keyboard,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import messagesApi from '../api/messages';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

function ListingDetailsScreen({ route, navigation }) {
	const listing = route.params;

	const handleSubmit = async (value, { resetForm }) => {
		const response = await messagesApi.sendMessage(
			value.message,
			value.listingId
		);
		console.log(response);
		if (!response.ok) return;
		resetForm();

		Keyboard.dismiss();
		navigation.navigate('Listing');
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Awesome!',
				body: 'Your message has been sent to the seller.',
			},
			trigger: null,
		});
	};

	const validationSchema = Yup.object().shape({
		message: Yup.string().required().min(5).label('Message'),
	});

	return (
		<KeyboardAvoidingView
			behavior="position"
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
		>
			<ScrollView>
				<TouchableOpacity>
					<Image
						preview={{ uri: listing.images[0].thumbnailUrl }}
						tint="light"
						uri={listing.images[0].url}
						style={styles.image}
					/>
				</TouchableOpacity>

				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{listing.title}</AppText>
					<AppText style={styles.price}>${listing.price}</AppText>
					<View style={styles.userContainer}>
						<ListItem
							image={require('../assets/mosh.jpg')}
							title="Nick de Groot"
							subtitle="5 listings"
						/>
					</View>
					<AppForm
						initialValues={{
							message: '',
							listingId: listing.id,
						}}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}
					>
						<AppFormField name="message" placeholder="Message" />
						<SubmitButton title="Contact Seller" />
					</AppForm>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.secondary,
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
