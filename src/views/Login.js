import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet, Text, View,
  SafeAreaView,
  TouchableOpacity,
  Alert, TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const setData = async () => {
    if (userName.length == 0 || password.length == 0) {
      Alert.alert("Fields is required!");
    }
    else {
      try {
        await AsyncStorage.getItem('UserData')
          .then(value => {
            if (value != null) {
              const userData = JSON.parse(value);
              return userData
            }
          })
          .then(userData => {
            userData.email == userName || userData.phoneNumber == userName
              ? (
                userData.password == password
                  ? navigation.navigate('Home')
                  : Alert.alert("User Name or Password is incorrect")
              )
              : Alert.alert("User Name is incorrect")
          })
      }
      catch (err) { console.log(err) }
    }
  }
  // let a = require('../assets/adaptive-icon.png');
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ marginTop: 50, marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In</Text>
      <View View style={styles.container} >
        <View>
          <TextInput style={styles.textInput}
            placeholder="Email Or Phone Number"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setUserName(value)} />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true} />
        </View>
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={() => setData()}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25, marginTop: 50, marginBottom: 50 }}> OR </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#344d91' }]} >
          <Text style={{ fontSize: 20, color: 'white' }}>Facebook Login</Text>
        </TouchableOpacity>
      </View >
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    height: 60,
    width: 350,
    fontSize: 17,
    borderWidth: 1,
    color: 'black',
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
  },
  title: {
    color: '#5ea33a',
    fontSize: 30,
    marginLeft: 15,
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    width: 280, height: 60,
    backgroundColor: '#5EA33A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
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
});
