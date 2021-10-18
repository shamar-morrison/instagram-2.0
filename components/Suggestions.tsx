import { useState, useEffect } from 'react';
import { UsersInterface } from './Interfaces';
import faker from 'faker';

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState<UsersInterface[]>([]);

	useEffect(() => {
		const results = [...Array(5)].map((_, index) => ({
			...faker.helpers.contextualCard(),
			id: index,
		}));

		setSuggestions(results);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3>Recommended for You</h3>
				<button>See All</button>
			</div>
		</div>
	);
};

export default Suggestions;
