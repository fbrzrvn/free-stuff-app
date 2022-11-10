import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: SignInScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free Stuff 😃</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        <Text style={styles.linkText}>Not have an account yet? Sign Up</Text>
      </TouchableOpacity>
      <Button title="Sign In" onPress={() => navigation.navigate('Root')} />
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
