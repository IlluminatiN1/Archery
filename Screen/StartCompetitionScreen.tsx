import { RootStackParamList } from "../Navigator/RootStackNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabParamList } from "../Navigator/TabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

type Props = CompositeScreenProps<NativeStackScreenProps<RootStackParamList>,
BottomTabScreenProps<TabParamList>
>;
export default function StartCompetitionScreen(props: Props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CompetitionStartScreen</Text>
        <Pressable onPress={() => props.navigation.navigate("Competition")}>
          <Text>Start</Text>
        </Pressable>
      </View>
    )
}