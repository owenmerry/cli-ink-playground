import React from 'react';
import {Text} from 'ink';
import {Counter} from './components/counter.js';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
			Count: <Counter />
		</Text>
	);
}
