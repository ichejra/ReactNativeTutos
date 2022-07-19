import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import ReviewDetails from "./reviewDetails";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  // navigation prop is by default
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem Ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (Again)",
      rating: 4,
      body: "Lorem Ipsum",
      key: "2",
    },
    {
      title: "Not So 'Final' Fantasy",
      rating: 2,
      body: "Lorem Ipsum",
      key: "3",
    },
  ]);

  const pressHandler = (screen) => {
    // if (screen === 'review')
    navigation.navigate(screen);
    // navigation.push('ReviewDetails') // same thing
  };

  const addReview = (review) => {
    setReviews((oldReviews) => [review, ...oldReviews]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      {/* show case <Text style={globalStyles.titleText}>Home Screen</Text> */}
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="remove"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm setModalOpen={setModalOpen} addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        // style={{}}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="go to review"
        onPress={() => pressHandler("ReviewDetails")}
      />
      <Button title="Go To About" onPress={() => pressHandler("About")} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    backgroundColor: "#e00",
    marginBottom: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#222",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalClose: {
    backgroundColor: "#fff",
    borderColor: "#f2f2f2",
    marginBottom: 0,
    marginTop: 20,
  },
});
