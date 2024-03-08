import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Items(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} resizeMode="contain" style={styles.image} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 700,
    backgroundColor:"rgba(255, 230, 230, 0.8)",
    flex: 1,
    gap: 10,
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom:15
  },
  imgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "80%",
    width: "100%",
  },
  title:{
    fontSize: 25,
    fontWeight: "bold"
  },
  desc:{
    fontSize: 15
  }
});
