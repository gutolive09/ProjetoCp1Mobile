import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},})
