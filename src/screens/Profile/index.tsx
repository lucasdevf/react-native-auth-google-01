import React, { useEffect, useState } from 'react'

import { View, Text } from "react-native";

/* NAVIGATION */
import { useRoute } from "@react-navigation/native";

/* STYLES */
import { styles } from "./styles";

interface Params {
  token: string
}

interface Profile {
  name: string
  email: string
  family_name: string
  given_name: string
  locale: string
  picture: string
}

export function Profile() {

  const [profile, setProfile] = useState({} as Profile)

  const route = useRoute()

  const { token } = route.params as Params

  async function fetchProfile() {
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    
    const userInfo = await response.json()
    
    setProfile(userInfo)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{profile.name}</Text>
    </View>
  )
}