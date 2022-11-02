import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet, Text, View,
  TextInput, Button,
  SafeAreaView,
  Image, ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useState, useEffect } from 'react';

export default function SignUp({navigation}) {
  const [userName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const setData = async () => {
    if (userName.length == 0 || Email.length == 0 || Phone.length == 0 || password.length == 0) {
      Alert.alert("Fields is required!");
    }

    else {
      try {
        const userData = {
          userName: userName,
          Email: Email,
          Phone: Phone,
          password: password,
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(userData));
        navigation.navigate('Home');
      }
      catch (err) { console.log(err) }
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
      <Text style={styles.title}>Create new account</Text>
      <View View style={styles.container} >
        <View>
          <TextInput style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setUserName(value)} />
        </View>
        <View>
          <TextInput style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setPhone(value)} />
        </View>
        <View>
          <TextInput style={styles.textInput}
            placeholder="Email Address"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setEmail(value)} />
        </View>
        <View>
          <TextInput style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#ccc'}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true} />
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#344d91' }]} >
          <Text style={{ fontSize: 20, color: 'white' }}>Sign Up</Text>
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
  image_1: {
    height: 100,
    width: 100
  }
});