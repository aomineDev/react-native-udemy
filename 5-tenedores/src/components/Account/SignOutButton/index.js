import React from 'react'
import { Button } from 'react-native-elements'

const SignOutButton = ({ onPress }) => (
  <Button
    title='Cerrar sesión'
    onPress={onPress}
  />
)

export default SignOutButton
