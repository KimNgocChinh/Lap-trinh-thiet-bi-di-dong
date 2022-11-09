import {
  StyleSheet, Text, View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-uuid'

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     // .then((res) => console.log(res))
  //     .catch((error) => console.log('Loi:  ', error))
  // }, [])
  const setData = async () => {
    if (fullName.length == 0 || password.length == 0 || email.length == 0 || phoneNumber.length == 0) {
      Alert.alert("Fields is required!");
    }

    else {
      try {
        let userData = {}
        const item = {
          id: uuid(),
          fullName: fullName,
          password: password,
          email: email,
          phoneNumber: phoneNumber
        }
        userData = item
        await AsyncStorage.setItem('UserData', JSON.stringify(userData));
        const getFullName = fullName
        const getPassword = password
        navigation.navigate('Login', getFullName, getPassword);
      }
      catch (err) { console.log(err) }
      setFullName('')
      setPhoneNumber('')
      setPassword('')
      setEmail('')
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ marginTop: 50, marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>New Account</Text>
      <View View style={styles.container} >
        <View>
          <TextInput style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setFullName(value)}
            value={fullName}
          />
        </View>
        <View>
          <TextInput style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setPhoneNumber(value)}
            value={phoneNumber} />
        </View>
        <View>
          <TextInput style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setEmail(value)}
            value={email} />
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
          style={[styles.button, { backgroundColor: '#344d91' }]}
          onPress={() => setData()}
        >
          <Text style={{ fontSize: 20, color: 'white' }} >Sign Up</Text>
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
