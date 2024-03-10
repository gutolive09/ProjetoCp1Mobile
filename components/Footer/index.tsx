import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Desenvolvido por:</Text>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Gustavo de Oliveira Azevedo</Text>
          <Text>RM: 550548</Text>
        </View>
        <View style={styles.item}>
          <Text>Mateus Mantovani</Text>
          <Text>RM: 98524</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    backgroundColor: "#E1AFD1",
    padding: 15,
    alignItems: "center",
  },
  title:{
    fontSize: 20
  },
  container:{
    flexDirection: "row",
    gap: 25
  },
  item: {
    alignItems: "center",
  },

});
