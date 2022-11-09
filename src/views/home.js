import React, { Component, useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, StatusBar, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories from '../../components/Categories';
import ListPopularItems from '../../components/ListPopularItems'
import Navbar from '../../components/Navbar'
export default HomePage = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    try {
      AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {
            const userData = JSON.parse(value);
            setUserName(userData.fullName);
          }
        })
    }
    catch { console.log('loi', err); }
  }
  return (
    <ScrollView style={{
      flex: 1,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
      // paddingHorizontal: 20
    }}>
      <Navbar title="Home" />

      {/* Categories */}
      <View>
        <Text style={{
          fontSize: 20,
          fontWeight: '200',
          marginBottom: 20,
          marginTop: 20,
          paddingHorizontal: 20
        }}>Popular Categories</Text>
        <Categories />
      </View>

      {/* Slides Menu*/}
      <View>
        <Text style={{
          fontSize: 20,
          fontWeight: '200',
          marginBottom: 20,
          marginTop: 20,
          paddingHorizontal: 20
        }}>Best Deals</Text>
      </View>

      {/* Most Popular */}
      <View >
        <Text style={{
          fontSize: 20,
          fontWeight: '200',
          marginBottom: 20,
          marginTop: 20,
          paddingHorizontal: 20
        }}
        >Most Popular</Text>
        <ListPopularItems />
      </View>
    </ScrollView>
  )
}

