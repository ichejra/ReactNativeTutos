import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import About from "./screens/about";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
// import Navigator from './routes/homeStack' //! old version not working anymore
//* React stack Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* Drawer Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

// //* get fonts
const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
//! ////////////////////////////////////////////

const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
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
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
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
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          /> */}
          {/* <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen
              name="About"
              component={About}
            />
          </Drawer.Navigator> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "GameZone",
              headerStyle: {
                backgroundColor: "#eee",
              },
              // headerTintColor: "#fff",
              // headerTitleStyle: {
              //   fontWeight: "bold",
              // },
            }}
          ></Stack.Screen>
          {/* {(props) => <Home {...props} extraData={someData} />} */}
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{
              title: "Review Details",
              headerStyle: {
                backgroundColor: "#eee",
              },
              // headerTintColor: "#fff",
              // headerTitleStyle: {
              //   fontWeight: "bold",
              // },
            }}
          >
            {/* {(props) => <ReviewDetails {...props} extraData={someData} />} */}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
