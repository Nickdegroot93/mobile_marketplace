import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<Screen style={styles.screen}>
			<ActivityIndicator visible={getListingsApi.loading} />
			{getListingsApi.error && (
				<>
					<AppText>
						We couldn't retrieve the data from the server. Please check your
						network status and try again.
					</AppText>
					<AppButton title="Retry" onPress={() => getListingsApi.request()} />
				</>
			)}

			<FlatList
				data={getListingsApi.data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={'$' + item.price}
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						thumbnailUrl={item.images[0].thumbnailUrl}
					/>
				)}
				refreshing={false}
				onRefresh={() => {
					getListingsApi.request();
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		paddingHorizontal: 10,
	},
});

export default ListingsScreen;
