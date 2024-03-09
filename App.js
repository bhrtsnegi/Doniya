import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Profile from './screens/Profile';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import BottomNav from './components/BottomNav';
import NotificationScreen from './screens/NotificationScreen';
import Candidates from './screens/ExploreComponents/Candidates';
import JobPositions from './screens/ExploreComponents/JobPositions';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='bottom' component={BottomNav} />
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name ="profile" component={Profile}/>
        <Stack.Screen name='explore' component={ExploreScreen}/>
        <Stack.Screen name="notification" component={NotificationScreen}/>
        <Stack.Screen name="candidate" component={Candidates}/>
        <Stack.Screen name="jobposition" component={JobPositions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;