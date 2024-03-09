import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../screens/Profile';
import NotificationScreen from '../screens/NotificationScreen';


const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator initialRouteName='home'>
            {/* <Tab.Screen name='home' component={HomeScreen}/> */}
            <Tab.Screen name="home" component={HomeScreen} 
            options={{  tabBarLabel:'Home',
            tabBarIcon : ({color})=> ( <Entypo name="home" size={24} color="black" />), headerShown:false}} />
            <Tab.Screen name="explore" component={ExploreScreen} 
            options={{ tabBarLabel: 'Explore', 
            tabBarIcon : ({color}) => ( <MaterialIcons name="explore" size={24} color="black" />), headerShown:false}}/>
            <Tab.Screen name="notification" component={NotificationScreen} 
            options={{tabBarLabel: 'Notificaiton', 
            tabBarIcon: ({color}) => ( <Ionicons name="notifications" size={24} color="black" />), headerShown:false}}/>
            <Tab.Screen name="profile" component={Profile}
            options={{tabBarLabel: 'Profile', 
            tabBarIcon: ({color}) => (<Entypo name="user" size={24} color="black" />), headerShown:false}} />
    </Tab.Navigator>
   
   
  );
}