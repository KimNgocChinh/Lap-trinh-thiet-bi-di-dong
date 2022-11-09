import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Category from './CategoryCard'
import CategoryItems from '../data/categories'

export default function Categories() {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {
        CategoryItems.map((category, index) =>
          <Category key={index} id={index} imageUrl={category.image} title={category.title} />
        )
      }
    </ScrollView>
  )
}