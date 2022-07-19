import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Baga");
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput
        multiline //allows to type multilines when click enter
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
        />
      <Text>Enter Age: </Text>
      <TextInput
        keyboardType="numeric" // custom phone keyboard  
        style={styles.input}
        placeholder="e.g. 20"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        name: {name}, age: {age}{" "}
      </Text>
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
  input: {
    width: 200,
    // height: 50,
    // textAlign: "center",
    // backgroundColor: "beige",
    borderColor: "#777",
    borderWidth: 1,
    padding: 8,
    margin: 10,
  },
});
