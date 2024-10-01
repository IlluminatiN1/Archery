
import { RootStackParamList } from "../Navigator/RootStackNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabParamList } from "../Navigator/TabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Props = CompositeScreenProps<NativeStackScreenProps<RootStackParamList, "Compound">,
BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen (props: Props) {
  return (
    <View style={ styles.container }>
      <Text>Home Screen</Text>
      <Pressable style={styles.button} onPress={() => props.navigation.navigate("Compound")}>
        <Text style={styles.buttonText}>Compound</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => props.navigation.navigate("Recurve")}>
        <Text style={styles.buttonText}>Recurve</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 6,
    color: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});