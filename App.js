import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <HelloWorld  />
      <HelloWorldWithMessage msg='hello my hello' />
    </View>
  );
}


function HelloWorld() {
  
  return (
    <Text>hello world</Text>
  );
}

function HelloWorldWithMessage({msg}) {
  
  return (
    <Text>{msg}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
