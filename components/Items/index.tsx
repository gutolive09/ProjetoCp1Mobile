import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Items(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}/>
      <Text>{props.title}</Text>
      <Text>{props.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"70%",
        height: "40%"
    },
    image:{
        height: "40%",
        width: "10%"
    }
})