import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const item = {
  id: 1,
  image: require('../images/icons8-restaurant-menu-101-p2.png'),
  title: "Welcome to our restaurant",
  subtitle: "Order food and make reservations with one click.",
}
export default function Landing({ navigation }) {
  return (
    <View style={{
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image style={{ width: 100, height: 100, marginBottom: 70, color: '#5EA33A' }} source={
        item.image
      } />
      <Text style={{ color: '#5EA33A', fontSize: 20, marginBottom: 50, fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ color: "black", fontSize: 20, width: 330, textAlign: "center", marginBottom: 50 }}>{item.subtitle}</Text>
      <TouchableOpacity style={{
        width: 330, height: 50,
        backgroundColor: '#5EA33A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
      }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 330, height: 50,
        borderWidth: 1,
        borderColor: '#5EA33A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20
      }}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={{ fontSize: 20, color: '#5EA33A' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}