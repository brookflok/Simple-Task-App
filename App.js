import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [isAddModal, setIsAddModal] = useState(false)

  const addTaskHandler = enteredTask => {
    setTaskList(taskList => [...taskList,
    {
      id: Math.random().toString(),
      value: enteredTask
    }])
    setIsAddModal(false)
  }

  const removeTaskHandler = taskId => {
    setTaskList(currentTasks => {
      return currentTasks.filter((task) => task.id !== taskId);
    })
  }

  const cancleAddTaskHandler = () =>{
    setIsAddModal(false)
  }

  return (
    <View style={stlyes.screen}>
      <Button title="Add your task" onPress={() => setIsAddModal(true)} />
      <TaskInput visible={isAddModal} onAddTask={addTaskHandler} onCancel={cancleAddTaskHandler} />
      <FlatList
        data={taskList}
        renderItem={itemData => (
          <TaskItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeTaskHandler} 
          />
        )} />
      <View>
      </View>
    </View>
  );
}

const stlyes = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})