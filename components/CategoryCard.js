import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Category({ imageUrl, title, id }) {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: id === 0 ? 20 : 0,
      marginRight: 15,
    }}>
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 35
        }}
        source={imageUrl}
      />
      <Text style={{ fontSize: 12, color: 'gray', textAlign: 'center' }}>{title}</Text>
    </View>
  )
}