import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
export default function Feature({ imageUrl, title }) {
  return (
    <TouchableOpacity style={{
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
      marginBottom: 10,
    }}>
      <Image
        style={{
          width: '100%',
          height: 120,
        }}
        source={imageUrl}
      />
      <Text
        style={{
          position: 'absolute',
          fontSize: 18,
          color: 'white',
        }}
      >{title}</Text>
    </TouchableOpacity>
  )
}