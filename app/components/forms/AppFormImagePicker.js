import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function AppFormImagePicker({ name }) {
	const { setFieldValue, errors, touched, values } = useFormikContext();

	const imageUris = values[name];

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((u) => u !== uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormImagePicker;
