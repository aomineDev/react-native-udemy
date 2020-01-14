import React from 'react'
import { View, Text } from 'react-native'

import SignOutButton from '../SignOutButton'

import styles from './styles'

const UserLogged = ({ onSignOut }) => (
  <View style={styles}>
    <Text>User Looged</Text>
    <SignOutButton onPress={onSignOut} />
  </View>
)

export default UserLogged
