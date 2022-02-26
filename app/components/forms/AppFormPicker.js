import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
	name,
	items,
	inputWidth,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
}) {
	const { setFieldValue, errors, touched, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				PickerItemComponent={PickerItemComponent}
				numberOfColumns={numberOfColumns}
				selectedItem={values[name]}
				inputWidth={inputWidth}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
