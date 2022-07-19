import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  const openMenu = () => {
    // navigation.openDrawer(); // if only Drawer was working
    navigation.navigate("About");
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginLeft: -15,
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
},
headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1,
},
icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
