import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import approvedFoodList from './App/approvedFoodList'

const Stack = createNativeStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FoodList' >
          <Stack.Screen name='FoodList' component={approvedFoodList} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}