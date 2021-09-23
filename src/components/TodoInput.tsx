import React, { useState } from "react";
import { 
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';

interface TodoInputProps {
    addTask: (task: string) => void;
}

export default function TodoInput({ addTask }: TodoInputProps){
    const [task, setTask] = useState('');

    function handleAddNewTask(){
        if(task === '') return;

        addTask(task);
        setTask('');
    }

    return(
        <View style={styles.body}>
            <TextInput 
                style={styles.input}
                placeholder= "Adicione uma tarefa"
                placeholderTextColor= "#b2b2b2"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            />
            <View style={styles.divider}></View>
            <TouchableOpacity 
                style={styles.todoButton}
                onPress={handleAddNewTask}
            >
                <Text style={styles.todoButtonText}>
                    {'>'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffffff',
        height: 67,
        marginHorizontal: 40,
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: -28,
    },
    input: {
        width: '80%',
        height: '100%',
        paddingLeft: 25,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#b2b2b2'
    },
    todoButton: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoButtonText: {
        fontSize: 30,
        color: '#b2b2b2',
    }
});