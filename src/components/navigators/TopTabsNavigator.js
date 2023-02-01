import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";
import MoviesStack from "./MoviesStack";
import SearchStack from "./SearchStack";
import TvShowsStack from "./TvShowsStack";

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle : { textTransform: "none" },
                    tabBarIndicatorStyle: { backgroundColor: 'black'}
                }}
            >
                <Tab.Screen
                name="Movies" 
                component={MoviesStack} 
                options={{  headerShown: false }}
                />
                <Tab.Screen 
                name="Search Results"
                component={SearchStack} 
                />
                <Tab.Screen 
                name="TV Shows" 
                component={TvShowsStack} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTabsNavigator