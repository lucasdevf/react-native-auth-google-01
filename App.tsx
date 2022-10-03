import React from 'react'
import { View, Text } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'
import { theme } from './src/styles/theme'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando</Text>
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </View>
  )
}