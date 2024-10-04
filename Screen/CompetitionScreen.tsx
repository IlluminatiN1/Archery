import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import { Competition, Round } from '../data/dataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompetitionScreen(props: any) {
  const { competitionName, location, date } = props.route.params;
  const [competitionData, setCompetitionData] = useState<Competition>({
    id: uuidv4(),
    name: competitionName || "",
    date: date || new Date().toISOString(),
    location: location || "",
    firstPeriod: [],
    firstPeriodTotalScore: 0,
    secondPeriod: [],
    secondPeriodTotalScore: 0,
    totalScore: 0,
  });

  const [score, setScore] = useState<number[]>([]);
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = 30;

  function handleScoreUpdate(index: number, points: number) {
    if (score.length < 3) {
      setScore((prevScore) => {
        const newScore = [...prevScore];
        newScore[index] = points;
        return newScore;
      });
    }
  }

  const handleNextRound = () => {
    if (score.length === 3) {
      const roundTotal = score.reduce((sum, shot) => sum + shot, 0);
      const newRound: Round = { shots: score, total: roundTotal, roundNumber: currentRound };

      setCompetitionData((prevData) => {
        const updateFirstPeriod = currentRound <= 15 ? [...prevData.firstPeriod, newRound] : prevData.firstPeriod;
        const updateSecondPeriod = currentRound > 15 ? [...prevData.secondPeriod, newRound] : prevData.secondPeriod;
        return {
          ...prevData,
          firstPeriod: updateFirstPeriod,
          firstPeriodTotalScore: updateFirstPeriod.reduce((sum, r) => sum + r.total, 0),
          secondPeriod: updateSecondPeriod,
          secondPeriodTotalScore: updateSecondPeriod.reduce((sum, r) => sum + r.total, 0),
          totalScore: updateFirstPeriod.reduce((sum, r) => sum + r.total, 0) + updateSecondPeriod.reduce((sum, r) => sum + r.total, 0),
        };
      });
      setScore([]);
      setCurrentRound(currentRound + 1);

      if (currentRound === totalRounds) {
        saveCompetition();
      }
    } else {
      alert("ange poäng");
    }
  };

  const saveCompetition = async () => {
    const storedCompetitions = await AsyncStorage.getItem("Competitions");
    const competitions = storedCompetitions ? JSON.parse(storedCompetitions) : [];
    competitions.push(competitionData);
    await AsyncStorage.setItem("Competitions", JSON.stringify(competitions));
    props.navigation.navigate("HomeNavigator", {screen: "Stats"});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.roundText}>Runda: {currentRound} / {totalRounds}</Text>
      <Text style={styles.scoreText}>Nuvarande poäng: {score.reduce((sum, shot) => sum + shot, 0)}</Text>

      {[0, 1, 2].map((index) => (
        <View key={index} style={styles.targetContainer}>
          <Image
            source={require("../assets/ArcheryTarget.png")}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            {[10, 9, 8, 7, 0].map((points) => (
              <Pressable
                key={points}
                style={[
                styles.scoreButton,
                score[index] === points && styles.selectedButton]}
                onPress={() => handleScoreUpdate(index, points)}>
                <Text style={styles.scoreText}>{points}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
      <Pressable style={styles.nextRoundButton} onPress={handleNextRound}>
        <Text style={styles.nextRoundText}>Nästa Runda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  targetContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 140,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  scoreButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedButton: {
    backgroundColor: "green",
    borderColor: "gray",
  },
  scoreText: {
    fontSize: 16,
    color: "black",
  },
  nextRoundButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  nextRoundText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  roundText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


