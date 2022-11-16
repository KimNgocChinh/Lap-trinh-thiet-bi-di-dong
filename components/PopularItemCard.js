import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemDetail from '../src/views/ItemDetail'
export default function ItemPopularCard({ title, imageUrl, price }) {
  return (
    <TouchableOpacity style={{
      marginBottom: 20,
    }}
    >
      <Image
        style={{
          height: 200,
        }}
        source={imageUrl}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}>
        <Text style={{
          fontSize: 16
        }}>{title}</Text>
        <Text style={{
          fontSize: 16
        }}>$ {price}</Text>
      </View>
    </TouchableOpacity >
  )
}