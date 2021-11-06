import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../Icons/Icon";
export default function Category({text, children}) {
  return (
    <View style={styles.card}>
       {children}
      <Text style={styles.text}>{text}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:'bold'
    },
  card: {
    width: 120,
    borderRadius: 40,
    height: "100%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#FECE00",
    marginRight: 20,
  },
});
