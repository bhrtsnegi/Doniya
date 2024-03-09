import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Candidates from './ExploreComponents/Candidates';
import JobPositions from './ExploreComponents/JobPositions';

 const Tab = createMaterialTopTabNavigator();

export default function ExploreScreen() {
  return (
   <Tab.Navigator>
      <Tab.Screen name="candidate" component={Candidates}/>
      <Tab.Screen name="jobposition" component={JobPositions}/>
   </Tab.Navigator>
  )
}