import { View, Text, Image } from 'react-native'
import React from 'react'

export default function slideItem({ item }) {
  return (
    <View style={{ width: 393, flexDirection: 'column', alignItems: 'center', backgroundColor: '#5EA33A', paddingBottom: 300, justifyContent: 'center' }}>

      <Image style={{ width: 100, height: 100, marginBottom: 70 }} source={
        item.image
      } />
      <Text style={{ color: "white", fontSize: 20, marginBottom: 50, fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ color: "white", fontSize: 20, width: 350, textAlign: "center", }}>{item.subtitle}</Text>

    </View>
  )
}