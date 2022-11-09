import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import Slide from '../../components/Slide'
const screen = Dimensions.get("screen");

const slides = [
  {
    id: 1,
    image: require('../images/icons8-restaurant-menu-101.png'),
    title: "Browse  Food",
    subtitle: "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 2,
    image: require('../images/icons8-delivery-500.png'),
    title: "Order Food",
    subtitle: "Hungry? Order food in just a few clicks and we’ll take care of you..",
  },
  {
    id: 3,
    image: require('../images/noun_Calendar_2442157.png'),
    title: "Make Reservations",
    subtitle: "Book a table in advance to avoid waiting in line",
  },
  {
    id: 4,
    image: require('../images/noun_Binoculars_1107295.png'),
    title: "Quick  Search",
    subtitle: "Quickly find food items you like the most"
  },

  {
    id: 5,
    image: require('../images/noun_mac_2076879.png'),
    title: "Apple Pay",
    subtitle: "We know you’re busy, so you can pay with your phone in just one click"
  },
]
export default function Slides({ navigation }) {
  const ref = useRef(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / 393);
    setCurrentSlideIndex(currentIndex)
  }
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * 393
      ref?.current?.scrollToOffset({ offset })
      setCurrentSlideIndex(nextSlideIndex)
    }
  }
  const skip = () => {
    const lastSlideIndex = slides.length - 1
    const offset = lastSlideIndex * 393
    ref?.current?.scrollToOffset({ offset })
    setCurrentSlideIndex(lastSlideIndex)
  }
  return (
    <>
      <View style={{ width: '100%', height: '100%' }}>

        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={slides}
          horizontal
          contentContainerStyle={{ height: 1200 * 0.75 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 200,
      }}>
        {slides.map((_, index) =>
          <View
            key={index}
            style={[styles.indicators, currentSlideIndex == index && {
              backgroundColor: 'white',
              width: 30
            }]}>
          </View>
        )}
      </View>
      {
        currentSlideIndex == slides.length - 1
          ? (
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Landing')}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#5EA33A' }}>Get Started</Text>
              </TouchableOpacity>
            </View>
          )
          : (
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>

              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 1, borderColor: 'white'
                  }]}
                onPress={skip}
              >
                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>SKIP</Text>
              </TouchableOpacity>
              <View style={{ width: 10 }}></View>
              <TouchableOpacity
                style={styles.btn}
                onPress={goNextSlide}
              >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5EA33A' }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          )
      }



    </>
  )
}

const styles = StyleSheet.create({
  indicators: {
    height: 5,
    width: 10,
    backgroundColor: 'white',
    marginHorizontal: 3,
    borderRadius: 2
  },
  btn: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    bottom: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
})