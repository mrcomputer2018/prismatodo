import Home from './src/screen/home';
import { useEffect, useState } from 'react';
import { initializeDb } from './src/services/db';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
    const [ initialized, setInitialized ] = useState(false);

    useEffect(() => {
        const setup = async () => {
            try {
                await initializeDb();
                setInitialized(true);
            } catch (error) {
                console.log("Erro ao inicializar o banco de dados: ", error);
            }
        }

        setup();
    }, []);

    if (!initialized) {
        return (
            <SafeAreaView>
                <Text>Carregando...</Text>
            </SafeAreaView>
        );
    }

    return (
        <Home />
    );
}
