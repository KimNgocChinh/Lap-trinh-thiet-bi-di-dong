import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Octicons, Feather } from '@expo/vector-icons';

export default function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <View><Octicons name="three-bars" size={28} color="black" /></View>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <View><Feather name="shopping-cart" size={28} color="black" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
})