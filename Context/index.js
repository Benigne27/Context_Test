import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState} from 'react'
import { authenticate } from '../Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const ContextCreator= createContext()

export default function ThemeProvider({children}) {
  const [user, setUser]=useState(null)
  const [logged, setLogged]=useState(false)
  const [userName, setUserName]=useState('')
  const [userToken, setUserToken]=useState(null)
 

  useEffect(()=>{
    const subscriber=authenticate.onAuthStateChanged((currentUser)=>
    {
      setUser(currentUser)
    })
    return subscriber
  }, [])

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
        await AsyncStorage.setItem('userToken', JSON.stringify(credentials.user.stsTokenManager.accessToken))
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
      await signOut(authenticate)
      try {
        await AsyncStorage.removeItem('userToken')
        setUserToken(null)
      } catch (error) {
        console.error(error);
      }
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
      LogOut
    }}>
      {children}
    </ContextCreator.Provider>
  )
}

