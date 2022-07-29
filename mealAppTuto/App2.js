import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // return (
    //   <NavigationContainer>
    //     <Drawer.Navigator
    //       /* initialRouteName="User" */ screenOptions={{
    //         headerStyle: {
    //           backgroundColor: "#3c0a6b",
    //         },
    //         headerTintColor: "white",
    //         drawerActiveBackgroundColor: "#F3C7F8",
    //         drawerActiveTintColor: "#4F1D7D",
    //         drawerInactiveTintColor: "#150D1C",
    //         drawerStyle: {
    //           // backgroundColor: "#ccc",
    //         },
    //       }}
    //     >
    //       <Drawer.Screen
    //         name="Welcome"
    //         component={WelcomeScreen}
    //         options={{
    //           drawerLabel: "Welcome Screen",
    //           drawerIcon: ({ color, size }) => {
    //             return <Ionicons name="home" color="#150D1C" size={size} />;
    //           },
    //         }}
    //       />
    //       <Drawer.Screen
    //         name="User"
    //         component={UserScreen}
    //         options={{
    //           drawerLabel: "User Screen",
    //           drawerIcon: ({ color, size }) => {
    //             return <Ionicons name="person" color="#150D1C" size={size} />;
    //           },
    //         }}
    //       />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
  );
}
