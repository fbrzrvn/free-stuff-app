import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          title: 'Home view',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'SignIn view'
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'SignUp view',
          headerLeft: () => null
        }}
      />
    </Stack.Navigator>
  );
}
