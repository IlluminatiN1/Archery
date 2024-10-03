import React from "react";
import RootStackNavigator from './Navigator/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" /> 
      <RootStackNavigator/>
    </NavigationContainer>
  );
}

