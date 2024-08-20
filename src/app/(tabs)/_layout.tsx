import { Tabs } from 'expo-router';
import FontAwesone from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'black',
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
		</Tabs>
	);
}
