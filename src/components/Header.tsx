import React from "react";
import {
    StyleSheet, 
    View,
    Text,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

interface HeaderProps {
    tasksQuantity: number;
}

export default function Header({ tasksQuantity }: HeaderProps){
    let headerText = '';

    if(tasksQuantity === 0){
        headerText = 'Nenhuma tarefa';
    }else if(tasksQuantity === 1){
        headerText = `Você têm ${tasksQuantity} tarefa`
    }else {
        headerText = `Você têm ${tasksQuantity} tarefas`
    }

    return(
        <View style={styles.container}>
            <SimpleLineIcons name="list" size={24} color="black" />
            <Text style={styles.text}>{headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        backgroundColor: '#8257E5',
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#ffffff',
        fontSize: 18,
    }
});