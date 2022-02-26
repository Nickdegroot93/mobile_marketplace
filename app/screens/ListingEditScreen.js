import React, { useState } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
	AppFormImagePicker,
} from '../components/forms';
import useLocation from '../hooks/useLocation';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import UploadScreen from './UploadScreen';

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9,
	},
];

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().optional().min(3).label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image'),
});

function ListingEditScreen({ navigation }) {
	const location = useLocation();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(
			{
				...listing,
				location,
			},
			(progress) => setProgress(progress)
		);

		if (!result.ok) {
			setUploadVisible(false);
			return alert('Could not save listing.');
		}
		resetForm();
	};

	const handleUploadComplete = () => {
		setUploadVisible(false);
		navigation.navigate('Feed');
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				progress={progress}
				visible={uploadVisible}
				onDone={handleUploadComplete}
			/>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					images: [],
					category: null,
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<AppFormImagePicker name="images" />
				<AppFormField name="title" placeholder="Title" maxLength={255} />
				<AppFormField
					inputWidth={120}
					name="price"
					placeholder="Price"
					maxLength={8}
					keyboardType="decimal-pad"
				/>
				<AppFormPicker
					items={categories}
					name="category"
					PickerItemComponent={CategoryPickerItem}
					numberOfColumns={3}
					placeholder="Category"
					inputWidth={200}
				/>
				<AppFormField
					name="description"
					placeholder="Description"
					maxLength={255}
					maxLines={3}
				/>

				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default ListingEditScreen;
