import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
	try {
		const item = {
			value,
			timestamp: Date.now(),
		};
		await AsyncStorage.setItem(`${prefix}-${key}`, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};

// Check if item is expired
const isExpired = (timestamp) => {
	const now = dayjs();
	const storedTime = dayjs(timestamp);
	return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(`${prefix}-${key}`);
		const item = JSON.parse(value);

		if (!item) return null;

		if (isExpired(item.timestamp)) {
			await AsyncStorage.removeItem(`${prefix}-${key}`);
			return null;
		}

		return item.value;
	} catch (error) {
		console.log(error);
	}
};

export default {
	get,
	store,
};
