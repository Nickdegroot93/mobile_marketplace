import React, { useState } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import ErrorMessage from '../components/forms/ErrorMessage';
import registerApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(2).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
	const [error, setError] = useState();
	const { login } = useAuth();

	const handleSubmit = async ({ name, email, password }) => {
		try {
			const result = await registerApi.register(name, email, password);
			if (!result.ok) {
				if (result.data) setError(result.data.error);
				else {
					setError('An unexpected error occurred.');
				}
				return;
			}
			const { data: token } = await authApi.login(email, password);
			console.log(token);
			login(token);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage error={error} />
				<AppFormField
					name="name"
					iconName="account"
					placeholder="Name"
					autoCorrect={false}
				/>
				<AppFormField
					name="email"
					iconName="email"
					placeholder="Email"
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					textContentType="emailAddress"
				/>
				<AppFormField
					name="password"
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Password"
					iconName="lock"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
