/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeTab'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free Stuff 😃</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.link}>
        <Text style={styles.linkText}>Sign Out!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
