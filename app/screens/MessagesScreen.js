import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'Red Jacket',
		description: 'Is the item still for sale? I could pick it up tomorrow.',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'Gray couch in a great condition',
		description: 'Offering 1000$ for the couch',
		image: require('../assets/mosh.jpg'),
	},
];

function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (item) => {
		setMessages(messages.filter((message) => message.id !== item.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						showChevron
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => console.log(item.title)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeperator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 1,
							title: 'Red Jacket',
							description:
								'Is the item still for sale? I could pick it up tomorrow.',
							image: require('../assets/mosh.jpg'),
						},
						{
							id: 2,
							title: 'Gray couch in a great condition',
							description: 'Offering 1000$ for the couch',
							image: require('../assets/mosh.jpg'),
						},
						{
							id: 3,
							title: 'Designer wear shoes',
							description: 'Do you have any in a larger size?',
							image: require('../assets/mosh.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}

export default MessagesScreen;
