import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Items(props) {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={props.image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 700,
    backgroundColor: "rgba(255, 230, 230, 0.8)",
    flex: 1,
    gap: 10,
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "85%",
    width: "100%",
    position: "relative",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -50
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 15,
    textAlign: "center"
  },
  containerText:{
    marginHorizontal: 15,
    position: "relative",
    top: -55,
    alignItems: "center",
    gap: 20
  }
});
