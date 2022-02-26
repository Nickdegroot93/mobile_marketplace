import client from './client';

const endpoint = '/messages';

const sendMessage = (message, listingId) =>
	client.post(endpoint, { message, listingId });

export default {
	sendMessage,
};
////////////////////
