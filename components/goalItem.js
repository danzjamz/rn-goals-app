import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function GoalItem({goal, onDelete}) {

  return (
    <TouchableOpacity activeOpacity={.8} onPress={ () => onDelete(goal.key) }>
        <View style={styles.listItem}>
            <Text>{ goal.value }</Text>
        </View>
    </TouchableOpacity>
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
