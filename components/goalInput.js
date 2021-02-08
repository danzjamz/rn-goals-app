import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function GoalInput({ addGoal }) {
  const [newGoal, setNewGoal] = useState('');

  const onAddGoal =() => {
    addGoal(newGoal);
    setNewGoal('');
  }

  return (
    <View style={styles.wrapper}>
    <TextInput 
      style={styles.input} 
      placeholder='new goal' 
      value={newGoal}
      onChangeText={ (text) => setNewGoal(text)} 
    />
    <Button title='ADD' style={styles.btn} onPress={ onAddGoal } />
  </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10px',
    width: '100%'
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: '80%'
  },
});
