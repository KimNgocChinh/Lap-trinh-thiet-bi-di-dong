import { View, Text } from 'react-native'
import React from 'react'
import mostPopularItems from '../data/mostPopularItems'
import PopularItemCard from './PopularItemCard'
export default function ListPopularItems() {
  return (
    <View>
      {
        mostPopularItems.map((item, index) =>
          <PopularItemCard
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.image}
          />

        )
      }
    </View>
  )
}