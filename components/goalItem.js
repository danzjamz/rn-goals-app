import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function GoalItem({title}) {

  return (
    <View style={styles.listItem}>
        <Text>{ title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    width: '80%',
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
