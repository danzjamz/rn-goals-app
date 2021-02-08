import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput style={{borderBottomColor: 'black', borderBottomWidth: 1, width: '80%'}} />
        <Button title='ADD' style={styles.btn} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10px',
    width: '100%'
  },
  input: {
    borderBottomColor: 'black', borderBottomWidth: 1
  },
  btn: {
    backgroundColor: '#aedf23'
  }
});
