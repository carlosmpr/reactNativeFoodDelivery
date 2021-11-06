import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Avatar from "../Avatar/Avatar";
import Category from "../Card/Category";
import Pizza from "../Icons/Pizza";
import Burger from "../Icons/Burger";
import Fries from "../Icons/Fries";
import FoodCard from "../Card/FoodCard";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen";
const Stack = createNativeStackNavigator();
export function Home({navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          "90deg",
          "rgba(241,229,85,0.9612219887955182) 0%",
          "rgba(232,232,163,0.5466561624649859)",
        ]}
      >
        <ScrollView style={{ height: "100%" }}>
          <Avatar />
          <View style={{ padding: 20 }}>
            <Text
              style={{ fontSize: 20, color: "#A0A0A0", fontWeight: "bold" }}
            >
              Get your food
            </Text>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>Delivered!</Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "500" }}>Categories</Text>

            <ScrollView
              style={styles.scrollView}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category text={"Pizza"}>
                <Pizza />
              </Category>

              <Category text={"Burger"}>
                <Burger />
              </Category>

              <Category text={"Fries"}>
                <Fries />
              </Category>
            </ScrollView>
            <Text style={{ fontSize: 24, fontWeight: "500", marginTop: 20 }}>
              Popular Now
            </Text>
            <ScrollView
              style={styles.largeScrollViw}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FoodCard text={"Pizza"} func={()=> navigation.navigate('Detail')}>
                <Pizza />
              </FoodCard>

              <FoodCard text={"Burger"} func={()=> navigation.navigate('Detail')}>
                <Burger />
              </FoodCard>

              <FoodCard text={"Fries"} func={()=> navigation.navigate('Detail')}>
                <Fries />
              </FoodCard>
            </ScrollView>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Home}  options={({ route }) => ({
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
      <Stack.Screen name="Detail" component={DetailScreen}  
        />
    </Stack.Navigator>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    width: "100%",
    height: "20%",
  },

  largeScrollViw: {
    padding: 20,
    height: "60%",
  },
});
