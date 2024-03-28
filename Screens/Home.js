import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContextCreator } from '../Context'

export default function Home() {
  const {LogOut}=useContext(ContextCreator)
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>Welcome Home</Text>
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