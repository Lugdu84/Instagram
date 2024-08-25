import { Text, View } from 'react-native';
import posts from '@assets/data/posts.json';

const post1 = posts[0];

export default function HomeScreen() {
	console.log(post1);
	return (
		<View className=" bg-slate-600 flex-1 items-center justify-center">
			<Text className=" text-xs md:text-4xl text-blue-500 font-bold">Feed</Text>
		</View>
	);
}
