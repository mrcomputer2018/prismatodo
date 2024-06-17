import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Task } from "@prisma/client"
import {Ionicons} from "@expo/vector-icons";

interface TaskProps {
    data: Task
}

const ListTasks = ({ data } : TaskProps) => {
    return ( 
        <View style={ styles.container } key={data.id}>
            <Text style={ styles.text }>{data.name}</Text>

            <View style={ styles.buttons }>
                <TouchableOpacity style={ styles.buttonsDelete }>
                    <Ionicons name="trash-outline" size={16} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.buttonsCompleted }>
                    <Ionicons name="checkmark-outline" size={16} color="#fff"/>
                </TouchableOpacity>
            </View>
            
           
        </View>
    );
}
 
export default ListTasks;

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 50,
        backgroundColor: '#64748b',
        padding: 14,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
    },
    text: {
        fontWeight: "500",
        color: "#fff",
        fontSize: 18,
    },
    buttons: {
        position: 'absolute',
        bottom: -18,
        flexDirection: 'row',
        right: 0,
        zIndex: 99,
        gap: 10
    },
    buttonsDelete: {
        backgroundColor: '#ff4757',
        padding: 8,
        borderRadius: 99
    },
    buttonsCompleted: {
        backgroundColor: '#22c55e',
        padding: 8,
        borderRadius: 99
    }
});