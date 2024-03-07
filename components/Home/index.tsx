import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Items from '../Items'

export default function index() {
  return (
    <SafeAreaView>
      <Items image={require("../../assets/img/Goutobon.jpg")} title={"Goutobon no Hanayome"} desc={"As Quintuplas é um anime que segue a história de Fuutarou Uesugi, um tutor contratado para ensinar as quintuplas Nakano - Ichika, Nino, Miku, Yotsuba e Itsuki. O enredo combina comédia romântica, drama e slice of life, explorando temas de família, amizade e amor. A trama envolve reviravoltas inesperadas, revelações de segredos do passado e o desenvolvimento das complexas relações entre Fuutarou e as irmãs Nakano."}/>
      <Items image={require("../../assets/img/Dxd.jpg")} title={"DxD"} desc={"bbb"}/>
      <Items image={require("../../assets/img/Goutobon.jpg")} title={"aaa"} desc={"aaa"}/>
      <Items image={require("../../assets/img/Goutobon.jpg")} title={"bbb"} desc={"bbb"}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})