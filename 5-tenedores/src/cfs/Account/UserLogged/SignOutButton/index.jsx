import React from 'react'
import { Button } from 'react-native-elements'

import { signOutUser } from 'utils/FireBase/auth'

import styles from './styles'

export default function SignOutButton (props) {
  function handlePress () {
    signOutUser()
  }

  return (
    <Button
      {...props}
      buttonStyle={styles.btn}
      titleStyle={styles.title}
      onPress={handlePress}
    />
  )
}
