import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

export default function GoalInput({ addGoal, visible }) {
  const [newGoal, setNewGoal] = useState('');

  const onAddGoal =() => {
    addGoal(newGoal);
    setNewGoal('');
  }

  return (
    <Modal visible={ visible } animationType='slide'>
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.input} 
                placeholder='new goal' 
                value={newGoal}
                onChangeText={ (text) => setNewGoal(text)} 
            />
            <Button title='ADD' style={styles.btn} onPress={ onAddGoal } />
        </View>
    </Modal>
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
