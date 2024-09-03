import { View, Image } from 'react-native';
import posts from '@assets/data/posts.json';

const post1 = posts[0];

export default function FeedScreen() {
	console.log(post1);
	return (
		<View className="">
			<View className="p-2">
				<Image
					source={{ uri: post1.user.image_url }}
					className="w-12 aspect-square rounded-full"
				/>
			</View>
			<Image
				source={{ uri: post1.image_url }}
				className="w-full aspect-[4/3]"
			/>
		</View>
	);
}
