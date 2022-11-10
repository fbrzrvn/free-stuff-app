import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import { RootTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeTab">
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" color={color} size={size} />
        }}
      />
      <BottomTab.Screen
        name="FavoriteTab"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color, size }) => <FontAwesome name="heart" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="UploadTab"
        component={UploadScreen}
        options={{
          title: 'Upload',
          tabBarIcon: ({ color, size }) => <FontAwesome name="plus-square" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="InboxTab"
        component={InboxScreen}
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, size }) => <FontAwesome name="wechat" color={color} size={size} />
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}
