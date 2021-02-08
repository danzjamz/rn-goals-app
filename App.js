import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';

export default function App() {
  const [goals, setGoals] = useState([{ key: Math.random().toString(), value: 'hi'}, { key: Math.random().toString(), value: 'howdy'}]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const onAddGoal = (newGoal) => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: newGoal}]);
  }

  const onDeleteGoal = (goalKey) => {
    const newGoals = goals.filter(goal => goal.key !== goalKey);
    console.log(newGoals, goalKey)
    setGoals(newGoals);
  }


  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={ () => setIsAddOpen(!isAddOpen) } /> 
      <GoalInput visible={isAddOpen} addGoal={ onAddGoal } />
      <FlatList
        contentContainerStyle={styles.listWrapper}
        data={goals} 
        renderItem={itemData => (
          <GoalItem goal={itemData.item} onDelete={onDeleteGoal} />
        )}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    width: '100%'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10px',
    width: '100%'
  },
  listWrapper: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: '10px',
    width: '100%',
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: '80%'
  },
  listItem: {
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    width: '80%',
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
  btn: {
    backgroundColor: '#628c0d',
    fontWeight: 600
  }
});
