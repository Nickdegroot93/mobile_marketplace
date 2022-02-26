import client from './client';

const endpoint = '/users';

const register = (name, email, password) =>
	client.post(endpoint, { name, email, password });

export default {
	register,
};
