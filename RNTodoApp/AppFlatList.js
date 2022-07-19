import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "lilly", id: 20 },
    { name: "alia", id: 40 },
    { name: "vass", id: 30 },
    { name: "fafu", id: 43 },
    { name: "cassy", id: 54 },
    { name: "nona", id: 32 },
  ]);
  // const [people, setPeople] = useState([
  //   { name: "lilly", key: 20 },
  //   { name: "alia", key: 40 },
  //   { name: "vass", key: 30 },
  //   { name: "fafu", key: 43 },
  //   { name: "cassy", key: 54 },
  //   { name: "nona", key: 32 },
  // ]);
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.name}</Text>;
        }}
      />
      {/* this replace <ScrollView> and <List> combined */}
      {/* 
        <ScrollView>
          {people.map((person) => {
            return (
              <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
              </View>
              );
            })} 
        </ScrollView>
      */}
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
    marginTop: 24
  },
});

// FlatList automatically uses the key in an array element;
//if we have id instead of a key in our array we use keyExtractor (look above) 
// numColumns split the row on the given number