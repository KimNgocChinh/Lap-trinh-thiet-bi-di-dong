import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RootComponent from "./src/views/RootComponent";
export default function App() {
  return (
    <RootComponent />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});
