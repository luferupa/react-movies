import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TvShowScreen from '../screens/TvShowScreen';
import TvShowsScreen from '../screens/TvShowsScreen';

const Stack = createNativeStackNavigator();

const TvShowsStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" 
            component={TvShowsScreen} 
            options={{  headerShown: false }} 
            />
            <Stack.Screen name="Tv Show"
            component={TvShowScreen}
            options={({ route }) => ({
                title: route.params.title,
                headerBackTitle: 'Back to List',
                /*presentation: 'modal'*/
            })}
            />
        </Stack.Navigator>
    )
}

export default TvShowsStack