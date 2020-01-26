import React from 'react'
import { View, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'

import styles from './styles'

export default function UserDetails () {
  const details = [
    {
      title: 'Cambiar Nombre y Apellidos',
      iconNameLeft: 'account-circle',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => Alert.alert('test', 'change displayName')
    },
    {
      title: 'Cambiar Email',
      iconNameLeft: 'mail',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => Alert.alert('test', 'change Email')
    },
    {
      title: 'Cambiar Contraseña',
      iconNameLeft: 'lock',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => Alert.alert('test', 'change Password')
    }
  ]

  return (
    <View>
      {details.map((detail, index) => (
        <ListItem
          key={index}
          title={detail.title}
          leftIcon={{
            name: detail.iconNameLeft,
            color: detail.iconColorLeft
          }}
          rightIcon={{
            name: detail.iconNameRight,
            color: detail.iconColorRight
          }}
          onPress={detail.handlePress}
          containerStyle={styles.container}
        />
      ))}
    </View>
  )
}
