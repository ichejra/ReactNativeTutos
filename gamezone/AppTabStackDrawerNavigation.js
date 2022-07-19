//! Tab Navigation is working
//! Stack Navigation is working
//! Drawer Navigation is NOT working!!!!! check it later
import "react-native-gesture-handler";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import About from "./screens/about";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
//* React stack Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//* Drawer Navigation

import { createDrawerNavigator } from "@react-navigation/drawer";

//* Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

// //* get fonts
const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

SplashScreen.preventAutoHideAsync();
//! ////////////////////////////////////////////

const Root = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "GameZone",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

//! ////////////////////////////////////////////

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={onLayoutRootView}
      >
        <Text>Loading...! 👋</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "GameZone",
              headerStyle: {
                backgroundColor: "#eee",
              },
            }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{
              title: "Review Details",
              headerStyle: {
                backgroundColor: "#eee",
              },
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: "About GameZone",
              headerStyle: {
                backgroundColor: "#eee",
              },
            }}
          />
        </Stack.Navigator> */}
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notifications" component={About} />
        </Drawer.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
