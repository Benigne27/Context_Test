import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Input from '../Components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContextCreator } from '../Context'

const height=Dimensions.get('screen').height 

export default function Login({navigation}) {
  const {Login}=useContext(ContextCreator)
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const handleLogin=async()=>{
    Login(email, password)   
    
   
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Below:</Text>
      <View style={styles.inputs}>
        <Input label={'Email:'} value={email} change={setEmail}/>
        <Input label={'Password:'} value={password} change={setPassword}/>
      </View>
     <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text1}>Login</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       height:height,
       backgroundColor:'#AF6F8F' ,
       
       flex:1,
       alignItems:'center',
       paddingTop:200,
       paddingHorizontal:20
    },
    text:{
        fontSize:25,
        fontWeight:'bold',

    },
    text1:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
      

    },
    button:{
        width:370,
        height:50,
        backgroundColor:'#CAA4A9',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10

    },
    inputs:{
        paddingVertical:50
    }
})