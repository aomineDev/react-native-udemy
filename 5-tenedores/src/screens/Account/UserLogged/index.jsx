import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { Avatar } from 'react-native-elements'

import { onSignOut, currentUser } from '../../../utils/FireBase/auth'

import SignOutButton from '../../../components/Account/SignOutButton'
import LoadingPage from '../../../components/shared/LoadingPage'

import styles from './styles'

export default function UserLogged () {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    currentUser()
      .then(user => {
        setUser(user)
        setLoading(false)
      })
      .catch(error => Alert.alert('Error', error))
  }, [])

  if (loading) return <LoadingPage isVIsible text='cargando...' />

  return (
    <View style={styles}>
      <Text>{user.displayName}</Text>
      <Avatar
        rounded
        source={{
          uri: user.photoURL
        }}
      />
      <SignOutButton onPress={onSignOut} />
    </View>
  )
}
