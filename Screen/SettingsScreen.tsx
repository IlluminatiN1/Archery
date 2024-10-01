import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../Navigator/RootStackNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabParamList } from "../Navigator/TabNavigator";


type Props = CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, "Settings">,
    BottomTabScreenProps<TabParamList>
>;
export default function SettingsScreen(props: Props) {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});