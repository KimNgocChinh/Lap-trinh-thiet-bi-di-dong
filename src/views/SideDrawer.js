import { View, Text, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import listButton from '../../data/buttonAtSideDrawer'
export default function SideDrawer() {

  return (
    <>
      <View style={{
        flex: 1,
        height: '100%',
        width: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowColor: 'black',
        elevation: 100,
        position: 'absolute',
        // opacity: 0,
        // left: -393,
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
                borderColor: '#ccc'
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
      </View >
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
});