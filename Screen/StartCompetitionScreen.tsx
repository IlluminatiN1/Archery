import { RootStackParamList } from "../Navigator/RootStackNavigator";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabParamList } from "../Navigator/TabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Platform, TextInput } from 'react-native';
import * as Location from 'expo-location';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = CompositeScreenProps<NativeStackScreenProps<RootStackParamList>,
  BottomTabScreenProps<TabParamList>
>;

export default function StartCompetitionScreen(props: Props) {
  const [location, setLocation] = useState<string>();
  const [competitionName, setCompetitionName] = useState<string>();
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocation("Location not available");
        return;
      }
      let locationResult = await Location.getCurrentPositionAsync({});
      let coords = locationResult.coords;
      let address = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
      if (address.length > 0) {
        const { city, country } = address[0];
        setLocation(`${city}, ${country}`);
      } else {
        setLocation("Location not available");
      }
    })();
  }, []);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(Platform.OS === 'ios');
  };

  return (
    <View style={styles.container} >
      <View style={styles.center}>
        <Text style={styles.competition}>Archery</Text>
        <TextInput
          style={styles.textPlaceholder}
          placeholder="Enter name of compeition"
          value={competitionName}
          onChangeText={setCompetitionName}
        />
      </View>
      <View style={styles.center}>
        <Text>{location}</Text>
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </Pressable>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <View style={styles.center}>
        <Pressable
          style={styles.startButton}
          onPress={() => props.navigation.navigate("Competition")}>
          <Text style={styles.startButtonText}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  center: {
    alignItems: "center",
    marginBottom: 20,
  },
  competition: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textPlaceholder: {
    width: 200,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  dateButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  dateText: {
    fontSize: 16,
  },
  startButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
