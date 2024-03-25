import { StyleSheet, Text, View } from 'react-native'
import React, { createContext} from 'react'

export const ContextCreator= createContext()

export default function ThemeProvider({children}) {
  return (
    <ContextCreator.Provider>
      {children}
    </ContextCreator.Provider>
  )
}

