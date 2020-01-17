import React from 'react'

import { View, Text } from 'react-native'

import { onSignOut } from '../../../utils/FireBaseActions'

import SignOutButton from '../../../components/Account/SignOutButton'

import styles from './styles'

const UserLogged = () => (
  <View style={styles}>
    <Text>User Looged</Text>
    <SignOutButton onPress={onSignOut} />
  </View>
)

export default UserLogged
