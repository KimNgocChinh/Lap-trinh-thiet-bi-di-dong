import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Slide from '../../components/Slide'
const slides = [
  {
    id: 1,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Browse  Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 2,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Order Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 3,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Browse  Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 4,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Browse  Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
]
export default function Slides() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </View>
  )
}