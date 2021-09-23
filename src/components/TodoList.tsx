import React from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { Octicons, Feather, FontAwesome } from '@expo/vector-icons';

export interface TaskProps {
    id: string;
    name: string;
    isDone: boolean;
}

interface TodoListProps {
    tasks: TaskProps[];
    deleteTask: (id: string) => void;
    checkTask: (id: string) => void;
}

export function TodoList({ tasks, deleteTask, checkTask }: TodoListProps){
    return (
        <View style={styles.body}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => {
                    return (
                        <View style={styles.todoItem}>
                            <View style={styles.test}>
                                <TouchableOpacity
                                    onPress={() => checkTask(item.id)}
                                >
                                    {
                                        item.isDone ?
                                            <FontAwesome
                                                name="check-square-o"
                                                size={20}
                                                color='#00ff00'
                                            />
                                        :
                                            <Feather
                                                name="square"
                                                size={20}
                                                color='#b2b2b2'
                                            />
                                    }
                                </TouchableOpacity> 
                                <TouchableOpacity
                                    onPress={() => checkTask(item.id)}
                                >
                                    <Text style={ item.isDone ? styles.todoTextDone : styles.todoText}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                <Octicons 
                                    name='trashcan'
                                    color={"#ff0000"}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '60%',
        marginTop: 30,
    },
    test: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoItem: {
        height: 55,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal: 45,
    },
    todoText: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 15,
    },
    todoTextDone: {
        fontSize: 16,
        marginLeft: 15,
        color: '#00ff00',
        textDecorationLine: 'line-through',
        textDecorationColor: '#00ff00',
    },
})