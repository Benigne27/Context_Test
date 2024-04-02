import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContextCreator } from '../Context'
import { getItemAsync } from 'expo-secure-store'
import AppLoading from 'expo-app-loading/build'
import { Icon } from 'react-native-paper'

export default function Home() {
  const {LogOut, userName, TheUser, DarkMode, dark}=useContext(ContextCreator)
  const User=async()=>{
    try {
      const name=await getItemAsync('userName')
      TheUser(JSON.parse(name))
    } catch (error) {
      console.error(error);
    }
  }
  const TheMode=async()=>{
    try {
      await getItemAsync('darkMode')
    } catch (error) {
      console.error(error);
    }
    DarkMode()
   
  }

  useEffect(()=>{
    User()
    TheMode()
  }, [])

  return (
    <View style={[styles.contain, {backgroundColor: dark?'black':'white'}]}>
      <TouchableOpacity onPress={TheMode} >
        <Icon source={dark?'weather-sunny':'weather-night'} size={35} color={dark?'white':'black'}/>
      </TouchableOpacity>
      <Text style={[styles.texts, {color: dark?'white':'black'}]}>Welcome <Text style={[styles.text, {fontFamily: 'Satisfy_400Regular'}]}>{userName}</Text>,</Text>
      <TouchableOpacity style={styles.button} onPress={LogOut}>
      <Text style={styles.text1}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  contain:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    position:'relative'
  },
  texts:{
    fontSize:30,
    fontWeight:'bold',
    bottom:100
  },
  text:{
    fontSize:30,
    color:'#AF6F8F',
    fontWeight:'bold',
    bottom:100
  },
  text1:{
   fontSize:16,
    fontWeight:'bold',
    color:'white'

  },
  button:{
    width:80,
    height:50,
    alignSelf:'center',
    display:'flex',
    alignItems:'center',   
    justifyContent:'center',
    backgroundColor:'#AF6F8F',
  
  }
})