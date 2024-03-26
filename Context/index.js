import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState} from 'react'
import { authenticate } from '../Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const ContextCreator= createContext()

export default function ThemeProvider({children}) {
  const [user, setUser]=useState(null)

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
      navigation.navigate('Login')
      
    } catch (error) {
      console.error(error)
      
    }
  }

  const Login=async(email, password)=>{
    try {
      await signInWithEmailAndPassword(authenticate, email, password)
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ContextCreator.Provider value={{
      user,
      SignUp,
      Login
    }}>
      {children}
    </ContextCreator.Provider>
  )
}

