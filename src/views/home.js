import React, { Component, useState, useEffect } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            setUserName(userData.userName);
          }
        })
    }
    catch { console.log(err); }
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View><Text>Hello {userName}</Text></View>
    </SafeAreaView>
  )
}