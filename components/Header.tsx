import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header: React.FC = () => {
	return (
		<div className="sticky top-0 bg-white shadow-sm border-b z-50">
			<div className="flex justify-between max-w-6xl lg:mx-auto mx-5">
				{/* Logo */}
				<div className="relative hidden lg:inline-grid w-24 ">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>
				<div className="relative w-10 lg:hidden flex-shrink-0 ">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						className="cursor-pointer"
						objectFit="contain"
					/>
				</div>

				{/* Search Bar */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0  pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							type="text"
							placeholder="Search"
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
						/>
					</div>
				</div>

				{/* Icons */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn " />
						<div className="absolute -top-3 -right-1 text-xs w-5 h-5 bg-red-500 flex items-center rounded-full justify-center animate-pulse text-white">
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />

					<img
						src="https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg"
						alt="profile pic"
						className="h-10 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
