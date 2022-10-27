import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image, ImageBackground, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(console.log("success"))
      .catch((error) => console.log(error))
  }, [])
  const setData = async () => {
    if (userName.length == 0 || password.length == 0) {
      Alert.alert("Fields is required!");
    }

    else {
      try {
        const userData = {
          userName: userName,
          password: password,
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(userData));
        navigation.navigate('Home');
      }
      catch (err) { console.log(err) }
    }
  }
  // let a = require('../assets/adaptive-icon.png');
  return (
    <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../images/umberto-FewHpO4VC9Y-unsplash.jpg')} resizeMode="stretch">
      <SafeAreaView style={{ flex: 1 }}>
        <View View style={styles.container} >
          <Text style={styles.title}>Login</Text>
          <View>
            <TextInput style={styles.textInput} placeholder="User Name" onChangeText={(value) => setUserName(value)} />
          </View>
          <View>
            <TextInput style={styles.textInput} placeholder="Password" onChangeText={(value) => setPassword(value)} />
          </View>
          <View style={styles.button}>
            <Button title="Login"
              onPress={() =>
                setData()
              }
            />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>Forget Password?</Text>
            <Text style={styles.text}>Register?</Text>
          </View>
          {/* <Image
        blurRadius={0}
        fadeDuration={4000}
        source={{
          uri: "https://picsum.photos/200",
          height: 100, width: 100
        }} />
      <Image style={styles.image_1}
        source={1}
      /> */}
        </View >
      </SafeAreaView>
    </ImageBackground >
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    height: 60,
    width: 350,
    fontSize: 20,
    borderWidth: 1,
    marginBottom: 20,
    color: 'black',
    borderColor: 'white',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 50,
    margin: 60,
  },
  button: {
    width: 350,
    fontSize: 50,
    height: 60,
    color: 'black',
  },
  textBox: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: "#06bcee",
    marginBottom: 20,
  },
  image_1: {
    height: 100,
    width: 100
  }
});
