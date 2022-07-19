import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

//* TODO List
export default function App() {
  const [todos, setTodos] = useState([
    { text: "wake up", key: 1 },
    { text: "have breakfast", key: 2 },
    { text: "start working", key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (value) => {
    if (value.length > 3) {
      setTodos((oldTodos) => {
        return [{ text: value, key: Math.random().toString() }, ...oldTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "understood", onPress: () => console.log("alert closed") }, //by default there is OK instead of understood, the array is optional
      ]);
    }
  };

  return (
    // whenever we click on the area of touchable without feedback, whatever inside onPress is fired
    <TouchableWithoutFeedback
      onPress={() => {
        // console.log('dismissed keyboard');
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to do form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                // return <Text>{item.text}</Text>;
                return <TodoItem item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
});
