import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet , Image } from "react-native";
import Pizza from '../../assets/images/pizza.jpeg';
import { LinearGradient } from "expo-linear-gradient";
export default function DetailScreen() {
    //
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          "90deg",
          "rgba(241,229,85,0.9612219887955182) 0%",
          "rgba(232,232,163,0.5466561624649859)",
        ]}
      >
        <ScrollView style={{width:'100%', height: "100%" }}>

            <View style={{width:"100%", display:'flex', height:300, backgroundColor:'red'}}>
                <Image style={{width:"100%", height:300}} source={Pizza}/>
            </View>

            <Text style={{paddingHorizontal:8, fontSize:25, fontWeight:'bold', marginTop:10}}>
                Couliflour Pizza
            </Text>
            <View style={{width:'100%' , padding:8}}>
            <View style={{width:'100%' , padding:20, backgroundColor:'white',  shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, borderRadius:20}}>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>

            </View>
            </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',

    
  },
});
