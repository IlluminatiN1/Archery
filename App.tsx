import React from "react";
import RootStackNavigator from './Navigator/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <RootStackNavigator/>
    </NavigationContainer>
  );
}

