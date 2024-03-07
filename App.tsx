import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import Header from "./components/Header"
import Home from './components/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/img/escola.jpg')} resizeMode='cover'/>
      <Header/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image:{
    flex:1,
    justifyContent: "center"
  }
});
