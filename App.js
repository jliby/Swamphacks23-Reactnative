import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import icon from "./assets/icon.png"
import ViewExample from './components/ViewExample';
import TextExample from './components/TextExample';
import ImageExample from './components/ImageExample';
import ButtonExample from './components/ButtonExample';
import WeatherApp from './components/weatherApp';
import NavigationExample from './components/NavigationExample';
export default function App() {
  return (
    <View style={styles.container}>
      <WeatherApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
