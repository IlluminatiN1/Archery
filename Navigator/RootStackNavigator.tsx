import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator, { TabParamList } from './TabNavigator';
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import React from "react";
import CompetitionScreen from "../Screen/CompetitionScreen";
import TrainingScreen from "../Screen/TrainingScreen";
import SettingsScreen from "../Screen/SettingsScreen";
import { StatusBar } from "expo-status-bar";

export type RootStackParamList = {
    HomeNavigator: NavigatorScreenParams<TabParamList>;
    Competition: undefined;
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
            name="Competition"
            component={CompetitionScreen}
            options={{title: "Competition Screen"}}
            />
            <RootStack.Screen
            name="Training"
            component={TrainingScreen}
            options={{title: "Training Screen"}}/>
            <RootStack.Screen
            name="Settings"
            component={SettingsScreen}/>
        </RootStack.Navigator>
        
    );
}