import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../types';

// eslint-disable-next-line no-unused-vars
export default function InboxScreen({ navigation }: RootTabScreenProps<'InboxTab'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox 📨</Text>
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
