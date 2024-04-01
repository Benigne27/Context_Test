import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import ThemeProvider from './Context';
import Home from './Screens/Home';
import { ContextCreator } from './Context/index';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItemAsync } from 'expo-secure-store';

const Stack = createStackNavigator()

export default function App() {

  return (
    <ThemeProvider>
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    </ThemeProvider>
  );
}

const StackNav=()=>{
  const {userToken,setUserToken, logged, userName} = useContext(ContextCreator)
  
  const userTok=async()=>{
    try {
      // const credit=await AsyncStorage.getItem('userToken')
      const credit= await getItemAsync('userToken')
      setUserToken(credit)
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    userTok()
  },[])
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {
          logged || userToken !=null ?(
            <>
             <Stack.Screen name='Home' component={Home}/>
             </>
          ):(
            <>
            <Stack.Screen name='SignUp' component={Signup}/>
            <Stack.Screen name='Login' component={Login}/>
            </>
          )
        }
        
       
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
