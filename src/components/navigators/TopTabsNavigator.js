import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";
import MoviesScreen from "../screens/MoviesScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle : { textTransform: "none" }
                }}
            >
                <Tab.Screen name="Movies" component={MoviesScreen} />
                <Tab.Screen name="Search Results" component={MoviesScreen} />
                <Tab.Screen name="TV Shows" component={MoviesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTabsNavigator