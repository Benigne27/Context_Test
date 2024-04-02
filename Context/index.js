import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState} from 'react'
import { authenticate } from '../Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteItemAsync, setItemAsync } from 'expo-secure-store'



export const ContextCreator= createContext()

export default function ThemeProvider({children}) {
  const [user, setUser]=useState(null)
  const [logged, setLogged]=useState(false)
  const [userName, setUserName]=useState('')
  const [userToken, setUserToken]=useState(null)
  const [dark, setDark]=useState(false)
 

  useEffect(()=>{
    const subscriber=authenticate.onAuthStateChanged((currentUser)=>
    {
      setUser(currentUser)
    })
    return subscriber
  }, [])

  const DarkMode=()=>{
    setDark(!dark)
    setItemAsync('darkMode', JSON.stringify(dark))
  }

  const TheUser=(newUser)=>{
    try {
      setUserName(newUser)
      console.log(newUser)
    } catch (error) {
      console.error(error);
    }
  }
  const SignUp=async(email, password)=>{
 
    try {
      await createUserWithEmailAndPassword(authenticate,email, password)
      
    } catch (error) {
      console.error(error)
      
    }
  }

  const Login=async(email, password)=>{
   
    try {
      const credentials= await signInWithEmailAndPassword(authenticate, email, password)
      console.log(credentials.user.stsTokenManager.accessToken)
      setLogged(true)
      setUserToken(credentials.user.stsTokenManager.accessToken)
      try {
        // await AsyncStorage.setItem('userToken', JSON.stringify(credentials.user.stsTokenManager.accessToken))
        await setItemAsync('userToken',JSON.stringify(credentials.user.stsTokenManager.accessToken))
        
      } catch (error) {
        console.error(error);
      }
1
     
    } catch (error) {
      console.error(error);
    }
  }

  const LogOut=async()=>{
    try {
      try {
        // await AsyncStorage.removeItem('userToken')
        await deleteItemAsync('userToken')
        setUserToken(null)
      } catch (error) {
        console.error(error);
      }
      await signOut(authenticate)
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <ContextCreator.Provider value={{
      user,
      SignUp,
      Login,
      logged,
      userToken,
      setUserToken,
      LogOut,
      userName,
      TheUser,
      DarkMode,
      dark
    }}>
      {children}
    </ContextCreator.Provider>
  )
}

