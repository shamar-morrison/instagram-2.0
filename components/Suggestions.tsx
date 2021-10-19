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

		console.log(faker.helpers.contextualCard());

		setSuggestions(results);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="font-bold text-gray-400">Suggestions for You</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>

			{suggestions.map(item => (
				<div key={item.id} className="flex items-center justify-between mt-3">
					<img
						src={item.avatar}
						alt="profile pic"
						className="w-10 h-10 border p-[2px] rounded-full"
					/>
					<div className="flex-1 ml-4">
						<h2 className="font-semibold text-sm">{item.username}</h2>
						<h3 className="text-xs text-gray-400">
							Works at {item.company?.name || 'Eat Fast - Downtown'}
						</h3>
					</div>
					<button className="text-xs text-blue-400 font-bold">Follow</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
