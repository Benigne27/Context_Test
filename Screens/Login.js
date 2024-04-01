import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Input from '../Components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContextCreator } from '../Context'
import { setItemAsync } from 'expo-secure-store'

const height=Dimensions.get('screen').height 

export default function Login({navigation}) {
  const {Login, TheUser}=useContext(ContextCreator)
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [newUserName, setNewUserName]=useState('')
  const handleLogin=async()=>{
    try {
      const user= await setItemAsync('userName', JSON.stringify(newUserName))
      console.log(user)
    } catch (error) {
      console.error(error);
    }
    Login(email, password) 

    TheUser(newUserName)
   
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Below:</Text>
      <View style={styles.inputs}>
        <Input label={'UserName:'} value={newUserName} change={setNewUserName}/>
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