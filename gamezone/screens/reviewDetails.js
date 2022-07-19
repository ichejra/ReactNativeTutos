import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  //* route is where the params we set are set
  console.log(route.params);
  const pressHandler = () => {
    // go back to previous screen
    navigation.goBack();
    // navigation.pop(); //same thing
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{route?.params?.title}</Text>
        <Text style={globalStyles.titleText}>{route?.params?.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.ratings[route?.params?.rating]} />
        </View>
      </Card>
      <Button title="Go Back Home" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
