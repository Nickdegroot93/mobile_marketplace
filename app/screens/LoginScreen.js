import React, { useState } from 'react';
import { StyleSheet, Image, Alert, Linking } from 'react-native';
import * as Yup from 'yup';

import {
	AppForm,
	AppFormField,
	ErrorMessage,
	SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
	const { login } = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		try {
			const result = await authApi.login(email, password);
			if (!result.ok) {
				return setLoginFailed(true);
			}
			// Return Token
			setLoginFailed(false);
			login(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage error="Login failed" visible={loginFailed} />
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
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
