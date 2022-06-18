import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.head}>
      <Text style={styles.heading1}>Golululu</Text>
      <Text style={styles.heading2}>B Lazy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1:{
    fontSize: 80,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 50
  },
  heading2:{
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold'
  }
});
