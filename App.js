import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const onAddGoal = () => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: newGoal}]);
    setNewGoal('');
  }


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
          style={styles.input} 
          placeholder='new goal' 
          value={newGoal}
          onChangeText={ (text) => setNewGoal(text)} 
        />
        <Button title='ADD' style={styles.btn} onPress={ onAddGoal } />
      </View>
      <FlatList
        contentContainerStyle={styles.listWrapper}
        data={goals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{ itemData.item.value }</Text>
          </View>
        )}  
      />
      {/* <ScrollView contentContainerStyle={styles.listWrapper}>
        { goals.map(goal => {
          return (

          )
        })}
      </ScrollView> */}
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
