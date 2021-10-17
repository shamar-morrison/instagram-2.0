import { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';
import { UsersInterface } from './Interfaces';

const Stories = () => {
	const [users, setUsers] = useState<UsersInterface[]>([]);

	useEffect(() => {
		const users: UsersInterface[] = [...Array(20)].map((_, index) => ({
			...faker.helpers.contextualCard(),
			id: index,
		}));

		setUsers(users);
	}, []);

	if (!users.length) return null;

	return (
		<ul className="flex bg-white space-x-2 p-6 mt-8 border border-gray-200 rounded-sm">
			{users.map(user => (
				<Story key={user.id} name={user.name} avatar={user.avatar} />
			))}
		</ul>
	);
};

export default Stories;
