import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/components/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import {Platform} from 'react-native'
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              // You can return any component that you like here!
              return <Feather name="home" size={24} color={color} />;
            },
            tabBarActiveTintColor: "#FECE00",
            tabBarInactiveTintColor: "gray",
            headerShown: Platform.OS === 'ios' ? false : true
          })}
        />

<Tab.Screen
          name="Setting"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
             

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              // You can return any component that you like here!
              return <Feather name="settings" size={24} color={color} />;
            },
            tabBarActiveTintColor: "#FECE00",
            tabBarInactiveTintColor: "gray",
          })}
        />
      </Tab.Navigator>

      
    </NavigationContainer>
  );
}
