import Post from './Post';

const posts = [
	{
		id: 123,
		username: 'shamar',
		avatar: 'https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg',
		img: 'https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg',
		caption: 'this is dope',
	},
	{
		id: 124,
		username: 'shamar',
		avatar: 'https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg',
		img: 'https://pbs.twimg.com/profile_images/1449066081864278020/_b5i3jGd_400x400.jpg',
		caption: 'this is dope',
	},
];

const Posts = () => {
	return (
		<div>
			{posts.map(post => {
				return (
					<Post
						id={post.id}
						key={post.id}
						username={post.username}
						avatar={post.avatar}
						img={post.img}
						caption={post.caption}
					/>
				);
			})}
		</div>
	);
};

export default Posts;
