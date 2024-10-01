import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from "../Screen/HomeScreen";
import StatsScreen from "../Screen/StatsScreen";
import Feather from '@expo/vector-icons/Feather';
export type TabParamList = {
    Home: undefined;
    Stats: undefined;
}
const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({navigation}) =>({
            headerRight: (props) => (
                <Feather
                name="settings"
                size={24}
                color="black"
                onPress={() => navigation.navigate("Settings")}
                />
            ),
            tabBarStyle: {
                backgroundColor: "black",
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} options= {{tabBarIcon: (props) => (
            <MaterialIcons name="home" size={props.size} color={props.color} />
        )}}/>
        <Tab.Screen name="Stats" component={StatsScreen} options= {{tabBarIcon: (props) => (
            <MaterialIcons name="bar-chart" size={props.size} color={props.color}/>
        ) }}/>
        </Tab.Navigator>
    )
}