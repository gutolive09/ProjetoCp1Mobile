import { ImageBackground, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from "./components/Header"
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/img/escola.jpg')} resizeMode='cover' style={styles.image}>
      <ScrollView>
      <Header/>
      <Home/>
      <Footer/>
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
