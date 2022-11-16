import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, Platform, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { Octicons, Feather } from '@expo/vector-icons';
import SideDrawer from '../src/views/SideDrawer';
import listButton from '../data/buttonAtSideDrawer'

export default function Navbar({ title }) {
  // Animated
  const fadeAnim = useRef(new Animated.Value(-393)).current;
  const [isMounted, setIsMounted] = useState(false)
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: -393,
      duration: 500,
      useNativeDriver: false

    }).start();
  };

  const handleClick = () => {
    console.log("click")
    isMounted ? fadeOut() : fadeIn();
    setIsMounted(!isMounted)
  }
  return (
    <View style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginBottom: 20,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}
      onClick={() => handleClick()}>
      <View style={styles.navbar}>
        <TouchableOpacity style={{ padding: 5 }} onPress={() => handleClick()}><Octicons name="three-bars" size={28} color="black" /></TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <TouchableOpacity style={{ padding: 5 }}><Feather name="shopping-cart" size={28} color="black" /></TouchableOpacity>
      </View>
      <Animated.View style={{
        width: '80%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowColor: 'black',
        elevation: 100,
        position: 'absolute',
        // opacity: 0,
        left: fadeAnim,
        zIndex: 2
      }}>
        {listButton.map((button, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: index === 0 ? 0.2 : 0,
                borderBottomWidth: 0.2,
                borderColor: '#ccc',
                zIndex: 1,
              }}
            >
              <Image
                style={{ color: 'red', width: 40, height: 40 }}
                source={button.iconUrl}
              />
              <Text style={{ fontSize: 20, textTransform: 'uppercase', marginLeft: 20 }}>{button.name}</Text>
            </TouchableOpacity>
          )
        })}
      </Animated.View >
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
})