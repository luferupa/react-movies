import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";
import MovieScreen from "../screens/MovieScreen";
import MoviesScreen from "../screens/MoviesScreen";
import SearchScreen from "../screens/SearchScreen";
import TvShowsScreen from "../screens/TvShowsScreen";
import MoviesStack from "./MoviesStack";

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle : { textTransform: "none" },
                }}
            >
                <Tab.Screen 
                name="Movies" 
                component={MoviesStack} 
                options={{  headerShown: false }}
                />
                <Tab.Screen name="Search Results" component={SearchScreen} />
                <Tab.Screen name="TV Shows" component={TvShowsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTabsNavigator