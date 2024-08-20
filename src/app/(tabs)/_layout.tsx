import { Tabs } from 'expo-router';
import FontAwesone from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'black',
				tabBarShowLabel: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesone
							name="home"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="new"
				options={{
					headerTitle: 'Create Post',
					tabBarIcon: ({ color }) => (
						<FontAwesone
							name="plus-square-o"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerTitle: 'Profile',
					tabBarIcon: ({ color }) => (
						<FontAwesone
							name="user"
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
