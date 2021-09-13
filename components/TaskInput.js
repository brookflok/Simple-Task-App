import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('')

    const addTaskHandler = () => {
        props.onAddTask(enteredTask)
        setEnteredTask('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={stlyes.inputContainer}>
                <TextInput
                    placeholder="Your task"
                    style={stlyes.input}
                    onChangeText={setEnteredTask}
                    value={enteredTask} />
                <View style={stlyes.buttonContainer}>
                    <View style={stlyes.button}>
                        <Button title="CANCLE" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={stlyes.button}>
                        <Button title="ADD" onPress={addTaskHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const stlyes = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },

    button: {
        width:'40%'
    }
})

export default TaskInput