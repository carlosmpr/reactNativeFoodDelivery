import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function FoodCard({text, children ,func}) {
  return (
    <TouchableOpacity onPress={func}>
    <View style={styles.card} >
       {children}
      <Text style={styles.text}>{text}</Text>
      
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:'bold'
    },
  card: {
    width: 220,
    borderRadius: 40,
    height: "100%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
