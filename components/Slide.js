import { View, Text, Image } from 'react-native'
import React from 'react'

export default function slideItem({ item }) {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5EA33A', padding: 30 }}>

      <Image style={{ width: 100, height: 100, marginBottom: 70 }} source={
        item.image
      } />
      <Text style={{ color: "white", fontSize: 20, marginBottom: 50 }}>{item.title}</Text>
      <Text style={{ color: "white", fontSize: 20, width: 350, textAlign: "center" }}>{item.subtitle}</Text>

    </View>
  )
}