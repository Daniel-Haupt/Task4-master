import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NextScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are logged in as Admin or Customer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#00ff00ff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
