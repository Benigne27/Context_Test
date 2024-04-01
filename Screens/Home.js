import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContextCreator } from '../Context'
import { getItemAsync } from 'expo-secure-store'

export default function Home() {
  const {LogOut, userName, TheUser}=useContext(ContextCreator)
  const User=async()=>{
    try {
      const name=await getItemAsync('userName')
      TheUser(JSON.parse(name))
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(()=>{
  //   User()
  // }, [])

  return (
    <View style={styles.contain}>
      <Text style={styles.texts}>Welcome <Text style={styles.text}>{userName}</Text>,</Text>
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
    justifyContent:'center'
  },
  texts:{
    fontSize:30,
    color:'black',
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