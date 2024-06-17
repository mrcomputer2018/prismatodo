import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";
import FormTask from "../../components/form";
import ListTasks from "../../components/tasks";

const Home = () => {
    return ( 
        <>
            <StatusBar barStyle="light-content" backgroundColor="#0f172a"/>

            <SafeAreaView style={ styles.container }>
                <Text style={ styles.title }>Easy Notes</Text>
                <Text style={ styles.text }>crie e gerencie suas tarefas</Text>

                <FormTask/>

                <Text style={ styles.text }>Lista de tarefas</Text>
                <ListTasks/>
            </SafeAreaView>
        </>
     );
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 14,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        color: '#e4e4e7',
        fontSize: 20
    }
});
 