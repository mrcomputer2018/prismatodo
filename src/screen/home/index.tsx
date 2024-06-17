import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";

const Home = () => {
    return ( 
        <>
            <StatusBar barStyle="light-content" backgroundColor="#0f172a"/>

            <SafeAreaView style={ styles.container }>
                <Text style={ styles.text }>Home</Text>
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
        paddingTop: 14
    },
    text: {
        color: '#fff',
        fontSize: 24
    }
});
 