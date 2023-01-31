import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";
import MoviesStack from "./MoviesStack";
import TvShowsStack from "./TvShowsStack";

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
                <Tab.Screen 
                name="TV Shows" 
                component={TvShowsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTabsNavigator