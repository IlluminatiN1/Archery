import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Competition, Training } from "../data/dataModel";
import { exampleCompetitions } from "../data/exampleDataCompetition";
import { exampleTrainings } from "../data/exampleTrainingData";

export default function StatsScreen() {
  const [competitions, setCompetitions] = React.useState<Competition[]>([]);
  const [trainings, setTrainings] = React.useState<Training[]>([]);

  useEffect(() => {
    async function fetchData() {
      const storedCompetitions = await AsyncStorage.getItem("Competitions");
      if (storedCompetitions) {
        setCompetitions(JSON.parse(storedCompetitions));
      } else {
        setCompetitions(exampleCompetitions);
      }

      const storedTrainings = await AsyncStorage.getItem("Training");
      if (storedTrainings) {
        setTrainings(JSON.parse(storedTrainings));
      } else {
        setTrainings(exampleTrainings);
      }
    }

    fetchData();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.header}>Competition</Text>
      {competitions.map((competition) => (
        <View key={competition.id} style={styles.container}>
          <Text>{competition.name}</Text>
          <Text>Location: {competition.location}</Text>
          <Text>Date: {competition.date}</Text>
          <Text>Total Score: {competition.totalScore}</Text>
        </View>
      ))}
      <Text style={styles.header}>Training</Text>
      {trainings.map((training) => (
        <View key={training.id} style={styles.container}>
          <Text>Date: {training.date}</Text>
          <Text>Total Score: {training.totalScore}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
