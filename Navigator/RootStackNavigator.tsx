import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator, { TabParamList } from './TabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from "react";

export type RootStackParamList = {
    HomeNavigator: NavigatorScreenParams<TabParamList>;
    Stats: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigator() {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name="HomeNavigator"
            component={TabNavigator}
            options={{
                headerShown: false,
            }}
            />
        </RootStack.Navigator>
    )
}