import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../Components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'

const height=Dimensions.get('screen').height

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Below:</Text>
      <View style={styles.inputs}>
        <Input label={'Email:'}/>
        <Input label={'Password:'}/>
      </View>
     <TouchableOpacity style={styles.button}>
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