import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
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
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
  },
});
