import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar translucent={true} backgroundColor={'#7469B6'}/>
      <View style={styles.container}>
        <Text style={styles.title}>Bucket List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 100,
    backgroundColor: "#7469B6",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFE6E6",
  },
});
