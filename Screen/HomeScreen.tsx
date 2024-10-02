
import { RootStackParamList } from "../Navigator/RootStackNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabParamList } from "../Navigator/TabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

type Props = CompositeScreenProps<NativeStackScreenProps<RootStackParamList, "Competition">,
BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen (props: Props) {
  return (
    <View style={ styles.container }>
      <Pressable onPress={() => props.navigation.navigate("Competition")}>
        <Image 
        source={require("../assets/Competition.png")} 
        style={styles.image}/>
      </Pressable>
      <Pressable style={styles.button} onPress={() => props.navigation.navigate("Competition")}>
        <Text style={styles.buttonText}>Competition</Text>
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Training")}>
        <Image source={require("../assets/Training.png")} style={styles.image} />
      </Pressable>
      <Pressable style={styles.trainingButton} onPress={() => props.navigation.navigate("Training")}>
        <Text style={styles.buttonText}>Training</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "black",
    fontSize: 17,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
    paddingBottom: 3,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    color: "white",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 450,
    height: 300,
  },
  trainingButton: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    padding: 10,
    color: "white",
    width: "100%",
  }
});