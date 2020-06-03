import React from 'react'
import { View, Text } from 'react-native'

import Avatar from '../Avatar'

import styles from './styles'

export default function UserProfile ({
  uid,
  photoURL,
  displayName,
  email,
  toggleAwaitResponse,
  toastRef
}) {
  return (
    <View style={styles.view}>
      <Avatar
        uid={uid}
        toggleAwaitResponse={toggleAwaitResponse}
        toastRef={toastRef}
        uri={photoURL}
      />
      <View>
        <Text style={styles.name}>
          {displayName ?? 'Anónimo'}
        </Text>
        <Text>
          {email}
        </Text>
      </View>
    </View>
  )
}
