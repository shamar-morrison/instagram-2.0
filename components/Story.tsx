import { UsersInterface } from './Interfaces';

const Story: React.FC<UsersInterface> = ({ avatar, name }) => {
	return (
		<div>
			<img
				className=" h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer object-contain hover:scale-105 transition-all duration-200"
				src={avatar}
				alt="profile pic"
			/>
			<p className="text-sm w-14 truncate text-center">{name}</p>
		</div>
	);
};

export default Story;
