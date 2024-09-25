import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from "../Screen/HomeScreen";
import StatsScreen from "../Screen/StatsScreen";
export type TabParamList = {
    Home: undefined;
    Stats: undefined;
}
const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigator() {
    return (
        <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} options= {{tabBarIcon: (props)=>(
            <MaterialIcons name="home" size={props.size} color={props.color} />
        )}}/>
        <Tab.Screen name="Stats" component={StatsScreen}/>
        </Tab.Navigator>
    )
}