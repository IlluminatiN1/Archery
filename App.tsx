import React from "react";
import RootStackNavigator from './Navigator/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator/>
    </NavigationContainer>
  );
}

