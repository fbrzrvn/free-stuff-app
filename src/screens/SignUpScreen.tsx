import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free Stuff 😃</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
      <Button title="Sign Up" onPress={() => navigation.navigate('Root')} />
    </View>
  );
}

SignUpScreen.navigationOptions = {
  headerLeft: () => null
};

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
