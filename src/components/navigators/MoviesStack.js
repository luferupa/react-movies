import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieScreen from '../screens/MovieScreen';
import MoviesScreen from '../screens/MoviesScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List"
            component={MoviesScreen} 
            options={{  headerShown: false }} 
            />
            <Stack.Screen name="Movie"
            component={MovieScreen}
            options={({ route }) => ({
                title: route.params.title,
                headerBackTitle: 'Back to List',
                /*presentation: 'modal'*/
            })}
            />
        </Stack.Navigator>
    )
}

export default MoviesStack