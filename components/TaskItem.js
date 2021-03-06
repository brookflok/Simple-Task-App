import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

const TaskItem = task => {
    return (
        <TouchableOpacity onPress={task.onDelete.bind(this, task.id)}>
        <View style={styles.listItem}>
            <Text >
                {task.title}
            </Text>
        </View>
        </TouchableOpacity    >
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
export default TaskItem