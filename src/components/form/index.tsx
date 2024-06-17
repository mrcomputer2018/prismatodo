import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { prismaClient } from "../../services/db";

const FormTask = () => {
    const [task, setTask] = useState('')

    async function handleNewTask() {
        console.log(task)
        if (task === '') {
            return
        }

        const response = await prismaClient.task.create({
            data: {
                name: task,
                completed: false
            }
        })

        if (!response) {
            alert('Erro ao salvar tarefa')
        }

        alert('Tarefa salva com sucesso.')
        setTask('')
        Keyboard.dismiss()
    }

    return ( 
        <View style={ styles.container }>
            <TextInput
            style={ styles.input }
            placeholder="digite sua tarefa..."
            value={task}
            onChangeText={setTask}
            />

            <TouchableOpacity
            style={ styles.button }
            onPress={handleNewTask}>
                <Text style={ styles.buttonText }>Adicionar</Text>
                <Ionicons name="add" size={24} color="#333"/>
            </TouchableOpacity>
        </View>
     );
}
 
export default FormTask;

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
        height: 50,
        width: 350,
        borderRadius: 10,
        backgroundColor: '#f1f5f9',
        padding: 10,
        marginTop: 8,
        marginBottom: 8,
        color: '#333',
        fontSize: 18,   
    },
    button: {
        backgroundColor: '#22c55e',
        flexDirection: 'row',
        height: 50,
        width: 350,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: 'pointer',
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold', 
    }
});