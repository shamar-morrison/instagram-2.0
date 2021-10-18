const MiniProfile = () => {
	return (
		<div className="ml-14 mt-14 flex items-center justify-between">
			<img
				src="https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg"
				alt="profile pic"
				className="rounded-full border p-[2px] w-16 h-16"
			/>

			<div className="flex-1 mx-4">
				<h2 className="font-bold">shamar</h2>
				<h3 className="text-sm text-gray-400 ">Welcome to Instagram 2.0</h3>
			</div>

			<button className="text-sm text-blue-400 font-semibold">Sign Out</button>
		</div>
	);
};

export default MiniProfile;
