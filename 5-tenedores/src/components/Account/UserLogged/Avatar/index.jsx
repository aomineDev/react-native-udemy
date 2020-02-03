import React from 'react'
import { Avatar } from 'react-native-elements'

import styles from './styles'

export default function AvatarComponent ({ uri, ...props }) {
  return (
    <Avatar
      {...props}
      containerStyle={styles.avatar}
      source={{
        uri: uri ?? 'https://api.adorable.io/avatars/285/adorable.png'
      }}
    />
  )
}
