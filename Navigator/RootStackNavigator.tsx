import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator, { TabParamList } from './TabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from "react";
import CompoundScreen from "../Screen/CompetitionScreen";
import RecurveScreen from "../Screen/TrainingScreen";
import SettingsScreen from "../Screen/SettingsScreen";

export type RootStackParamList = {
    HomeNavigator: NavigatorScreenParams<TabParamList>;
    Stats: undefined;
    Compound: undefined;
    Recurve: undefined;
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
            name="Compound"
            component={CompoundScreen}
            options={{title: "Compound Screen"}}
            />
            <RootStack.Screen
            name="Recurve"
            component={RecurveScreen}
            options={{title: "Recurve Screen"}}/>
            <RootStack.Screen
            name="Settings"
            component={SettingsScreen}/>
        </RootStack.Navigator>
    );
}