import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import Avatar from '../Avatar'

export default function UserProfile ({
  photoURL,
  displayName,
  email,
  onEditAvatar
}) {
  return (
    <View style={styles.view}>
      <Avatar
        uri={photoURL}
        onEditPress={onEditAvatar}
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
