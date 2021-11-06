import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, EvilIcons, Entypo } from "@expo/vector-icons";
export default function Avatar() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.image}
          source={{
            uri: "https://thispersondoesnotexist.com/image",
          }}
        />
      </View>
      <View style={styles.info}>
        <EvilIcons name="location" size={24} color="#FECE00" />
        <Text style={styles.name}>Zurich Ch</Text>
        <Entypo name="chevron-down" size={24} color="#FECE00" />
      </View>

      <View style={styles.badge}>
        <Ionicons name="menu" size={42} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 20,
  },
  circle: {
    width: "20%",
    height: 72,
    backgroundColor: "blue",
    borderRadius: 100,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: { width: "100%", height: "100%" },
  info: { display: "flex", flexDirection: "row", alignItems: "center" },

  badge: {
    padding: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
  },
});
