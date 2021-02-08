import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const onAddGoal = (newGoal) => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: newGoal}]);
  }


  return (
    <View style={styles.container}>
      <GoalInput addGoal={ onAddGoal } />
      <FlatList
        contentContainerStyle={styles.listWrapper}
        data={goals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
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
