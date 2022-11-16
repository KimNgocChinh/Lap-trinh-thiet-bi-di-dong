import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, Image } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react'

export default function ItemDetail() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="chevron-left" size={30} color="black" />
          <Text style={{ fontSize: 15 }}>Back</Text>
        </TouchableOpacity>
        <Text style={{ alignItems: 'center', fontSize: 20 }}>Title</Text>
      </View>
      <View style={{
        padding: 20, paddingBottom: 0
      }}>
        <Text style={{ fontSize: 20 }}>Title</Text>
        <Image
          source={require('../../assets/ForbiddenSalad.jpg')}
          style={{ width: '100%', height: '50%', marginTop: 20 }}
        />
        <View style={{
          marginTop: 20,
          width: '100%', height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Image
            source={require('../../assets/ForbiddenSalad.jpg')}
            style={{ flex: 1, height: '100%', marginRight: 10 }}
          />
          <Image
            source={require('../../assets/ForbiddenSalad.jpg')}
            style={{ flex: 1, height: '100%', marginRight: 10 }}
          />
          <Image
            source={require('../../assets/ForbiddenSalad.jpg')}
            style={{ flex: 1, height: '100%', marginRight: 10 }}
          />
          <Image
            source={require('../../assets/ForbiddenSalad.jpg')}
            style={{ flex: 1, height: '100%' }}
          />
        </View>
        <Text style={{
          marginTop: 20,
          fontSize: 18,
        }}>description</Text>
      </View>
      <View style={{
        alignItems: 'center',
      }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 20,
            width: '50%'
          }}>
            <TouchableOpacity style={{ padding: 10 }}>
              <Ionicons name="remove" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>0</Text>
            <TouchableOpacity style={{ padding: 10 }}>
              <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 20,
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              width: '30%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 100,
              marginRight: 10
            }}>
              <Text style={{ fontSize: 30 }}>
                $11.00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '50%', backgroundColor: 'green',
                height: '100%',
                justifyContent: 'center', alignItems: 'center',
              }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Add to Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})