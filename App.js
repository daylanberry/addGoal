import React, { useState } from 'react';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goal) => {
    setCourseGoals((currentArr) => [...currentArr, {key: Math.random().toString(), value: goal}])
    setIsAddMode(false)
  }

  const onDelete = (goalId) => {
    setCourseGoals((arr) => {
      return arr.filter((goal) =>
        goal.key !== goalId)
    })
  }
  console.log('hi')
  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput addGoalHandler={addGoalHandler} visible={isAddMode} cancel={cancelGoalHandler}/>

      <View>
      <FlatList data={courseGoals} renderItem={itemData =>
        <GoalItem title={itemData.item.value}
          index={itemData['index']}
          onDelete={onDelete}
          id={itemData.item.key}/>}

        />
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }

})
