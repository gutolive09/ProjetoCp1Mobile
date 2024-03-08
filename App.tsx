import { ImageBackground, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from "./components/Header"
import Home from './components/Home';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Header/>
      
      <ImageBackground source={require('./assets/img/escola.jpg')} resizeMode='cover' style={styles.image}>
      <ScrollView>
      <Home/>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image:{
    height: "100%",
    width: "100%",
  }
});
