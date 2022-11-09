import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'
import Feature from '../../components/Feature'
import categoriesItems from '../../data/categories'
export default function Menu() {
  return (
    <View style={{
      flex: 1,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    }}>
      <Navbar title="Menu" />
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
      }}>
        {
          categoriesItems.map((category, index) =>
            <Feature key={index} title={category.title} imageUrl={category.image} itemOfMenu={true} />
          )
        }
      </View>
    </View >
  )
}