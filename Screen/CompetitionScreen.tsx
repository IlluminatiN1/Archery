import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';


export default function CompetitionScreen() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require("../assets/ArcheryTarget.png")} 
          style={styles.image}
        />
                <Image
          source={require("../assets/ArcheryTarget.png")} 
          style={styles.image}
        />
                <Image
          source={require("../assets/ArcheryTarget.png")} 
          style={styles.image}
        />
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
  image: {
    width: 300, 
    height: 280,  
  },
});
