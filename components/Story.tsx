import { UsersInterface } from './Interfaces';

const Story: React.FC<UsersInterface> = ({ avatar, name }) => {
	return (
		<li>
			<img src={avatar} alt="profile pic" className="rounded-full" />
			<h4>{name}</h4>
		</li>
	);
};

export default Story;
