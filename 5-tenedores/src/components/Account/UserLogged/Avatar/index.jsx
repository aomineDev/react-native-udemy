import React from 'react'
import { Avatar } from 'react-native-elements'

import styles from './styles'

export default function AvatarComponent ({ uri, onEditPress }) {
  return (
    <Avatar
      rounded
      size='large'
      containerStyle={styles.avatar}
      showEditButton
      onEditPress={onEditPress}
      source={{
        uri: uri ?? 'https://api.adorable.io/avatars/285/adorable.png'
      }}
    />
  )
}
