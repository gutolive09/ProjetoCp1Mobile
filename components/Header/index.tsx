import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <View style={styles.container}>
        <Text style={styles.title}>Header</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 100,
    backgroundColor: "#212121",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#14FFEC",
  },
});
