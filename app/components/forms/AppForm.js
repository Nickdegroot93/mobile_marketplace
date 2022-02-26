import React from 'react';

import { Formik } from 'formik';

function AppForm({
	initialValues,
	onSubmit,
	resetForm,
	validationSchema,
	children,
}) {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			resetForm={resetForm}
		>
			{() => <>{children}</>}
		</Formik>
	);
}

export default AppForm;
