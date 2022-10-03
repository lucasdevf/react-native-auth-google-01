import React from 'react'

/* NAVIGATION */
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

/* SCREENS */
import { SignIn } from '../screens/SignIn'
import { Profile } from '../screens/Profile'

const { Navigator, Screen } = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen 
          name="SignIn"
          component={SignIn}
        />

        <Screen 
          name="Profile"
          component={Profile}
        />
      </Navigator>
    </NavigationContainer>
  )
}