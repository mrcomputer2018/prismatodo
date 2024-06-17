import { FlatList } from 'react-native';
import { prismaClient } from '../../services/db';
import ListTasks from './list';

const Tasks = () => {

    const tasks = prismaClient.task.useFindMany()

    return ( 
        <>
            <FlatList
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <ListTasks data={item} />}
            />
        </>
     );
}
 
export default Tasks;
