import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator, { TabParamList } from './TabNavigator';
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import React from "react";
import CompetitionScreen from "../Screen/CompetitionScreen";
import TrainingScreen from "../Screen/TrainingScreen";
import SettingsScreen from "../Screen/SettingsScreen";
import StartCompetitionScreen from "../Screen/StartCompetitionScreen";


export type RootStackParamList = {
    HomeNavigator: NavigatorScreenParams<TabParamList>;
    Competition: undefined;
    StartCompetition: undefined
    Training: undefined;
    Settings: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigator() {
    return(
        
        <RootStack.Navigator>
            <RootStack.Screen 
            name="HomeNavigator"
            component={TabNavigator}
            options={{
                headerShown: false,
            }}
            />
            <RootStack.Screen
            name="StartCompetition"
            component={StartCompetitionScreen}
            options={{headerStyle: {
                backgroundColor: "black",
                },
                headerTintColor: "white",
            }}
            />
            <RootStack.Screen
            name="Competition"
            component={CompetitionScreen}
            options={{headerStyle: {
                backgroundColor: "black",
                },
                headerTintColor: "white",
            }}
            />
            <RootStack.Screen
            name="Training"
            component={TrainingScreen}
            options={{headerStyle: {
                backgroundColor: "black",
                },
                headerTintColor: "white",
            }}/>
            <RootStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{headerStyle: {
                backgroundColor: "black",
                },
                headerTintColor: "white"
            }}/>
        </RootStack.Navigator>
        
    );
}