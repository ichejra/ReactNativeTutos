import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>One</Text>
      <Text style={styles.textTwo}>Two</Text>
      <Text style={styles.textThree}>Three</Text>
      <Text style={styles.textFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column", // by default
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 100,
    backgroundColor: "#aed",
  },
  textOne: {
    flex: 1,
    // width: 100,
    backgroundColor: "#efa",
    padding: 10,
  },
  textTwo: {
    flex: 2,
    // width: 100,
    backgroundColor: "coral",
    padding: 20,
  },
  textThree: {
    flex: 1,
    // width: 100,
    backgroundColor: "violet",
    padding: 30,
  },
  textFour: {
    flex: 3,
    // width: 100,
    backgroundColor: "skyblue",
    padding: 40,
  },
});
