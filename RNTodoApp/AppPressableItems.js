import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "lilly", id: 20 },
    { name: "emmy", id: 40 },
    { name: "san", id: 30 },
    { name: "mona", id: 43 },
    { name: "lina", id: 54 },
    { name: "nona", id: 32 },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople(oldPeople => {
      return oldPeople.filter((item) => item.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
