import React from 'react'
import { View } from 'react-native'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* AUTH */
import * as AuthSession from 'expo-auth-session'

/* COMPONENTS */
import { Button } from '../../components/Button'
import { SignInContent } from '../../components/SignInContent'

/* STYLES */
import { styles } from './styles'

interface AuthResponse {
  type: 'success' | 'cancel' | 'error'
  params: {
    access_token: string
  }
}

const { OAUTH_CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

export function SignIn() {

  const navigation = useNavigation()

  async function handleSignIn() {

    const RESPONSE_TYPE = 'token'
    const SCOPE = encodeURI('profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      navigation.navigate('Profile', { token: params.access_token })
    }
  }

  return (
    <View style={styles.container}>

      <SignInContent />

      <Button 
        title="Entrar com Google"
        icon="social-google"
        onPress={handleSignIn}
      />
    </View>
  )
}