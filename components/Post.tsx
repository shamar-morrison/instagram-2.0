import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

interface PostInterface {
	id: number;
	username: string;
	avatar: string;
	img: string;
	caption: string;
	age?: number;
}

const Post: React.FC<PostInterface> = props => {
	return (
		<div className="bg-white my-7 rounded-sm border">
			<div className="items-center p-5 flex">
				<img
					src={props.avatar}
					alt="profile pic"
					className="h-12 w-12 object-contain rounded-full p-1 mr-3 border cursor-pointer"
				/>
				<p className="flex-1 font-bold ">{props.username}</p>
				<DotsHorizontalIcon className="h-5 cursor-pointer" />
			</div>

			<img src={props.img} alt="post image" className="object-cover w-full" />

			{/* Buttons */}
			<div className="flex justify-between py-4 px-4">
				<div className="flex space-x-4 items-center">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			{/* Username and caption */}
			<p className="p-5 truncate">
				<span className="font-bold mr-1">{props.username} </span>
				{props.caption}
			</p>

			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7 cursor-pointer" />

				<input
					type="text"
					className="border-none flex-1 focus:ring-0 outline-none"
					placeholder="Add a comment..."
				/>
				<button className="font-semibold text-blue-400">Post</button>
			</form>
		</div>
	);
};

export default Post;
