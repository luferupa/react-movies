import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnyShowScreen from '../screens/AnyShowScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const SearchStack = ( route ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" 
            component={SearchScreen} 
            options={{  headerShown: false }} 
            />
            <Stack.Screen name="Search" component={AnyShowScreen}
            options={({ route }) => ({
                title: route.params.title,
                headerBackTitle: 'Back to List',
                /*presentation: 'modal'*/
            })}
            />
        </Stack.Navigator>
    )
}

export default SearchStack