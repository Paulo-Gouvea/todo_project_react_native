import React, { useState } from 'react';
import {
    Alert,
    StatusBar, StyleSheet, View,
} from 'react-native';

import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
import { TaskProps, TodoList } from '../components/TodoList';

export default function Home(){
    const [todoList, setTodoList] = useState<TaskProps[]>([]);

    function handleCreateTask(newTask: string){
        const doesTaskTitleExists = todoList.find(element => element.name === newTask)
        
        if(doesTaskTitleExists){
            console.log("Já existe essa task!");
            return;
        }

        setTodoList(oldState => [...oldState, {
            id: String(Math.floor((Math.random() * 10000) + 1)),
            name: newTask,
            isDone: false
        }])
    }

    function handleDeleteTask(taskID: string){
        Alert.alert("Remover item", "Tem certeza que você deseja remover esse item?",
        [{ text: 'Não' }, { text: 'Sim', onPress: remove}])
  
      function remove(){  
        const updatedTaskList = todoList.filter(task => task.id !== taskID);
        setTodoList(updatedTaskList);
      }
    }

    function handleCheckTask(taskID: string){
        console.log(taskID)
        const updatedTodoList = todoList;
        const findTask = updatedTodoList.find(element => element.id === taskID);

        if(findTask){
            findTask.isDone = !findTask.isDone;
            setTodoList([...updatedTodoList]);
        }
    }

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#8257E5'}/>
            <Header
                tasksQuantity={todoList.length}
            />
            <TodoInput 
                addTask={handleCreateTask}
            />
            <TodoList
                tasks={todoList}
                deleteTask={handleDeleteTask}
                checkTask={handleCheckTask}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
})