import React from 'react'
import { Button } from 'react-native-elements'

export default function SignOutButton ({ onPress }) {
  return (
    <Button
      title='Cerrar sesión'
      onPress={onPress}
    />
  )
}
