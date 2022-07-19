import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Baga");
  const [person, setPerson] = useState({name: "Babo", age:"300"});

  const changeName = () => {
    setName("iTree");
    setPerson({name: "Bagabo", age:"35"})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hey {name}!</Text>
        <Text>His name is {person.name} and he is {person.age} </Text>
        <View style={styles.buttonContainer}>
          <Button title="Click Me!" onPress={changeName}/>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>blablabla bla bal bla</Text>
        <Text>yati yati yatta</Text>
        <Text>yati yati yatta</Text>
        <Text>yati yati yatta</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  body: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 20,
  },
});
