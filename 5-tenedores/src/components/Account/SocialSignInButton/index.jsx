import React from 'react'
import { SocialIcon } from 'react-native-elements'

const SocialSignInButton = ({ title, type, onSignIn, onLogged, disabled, loading, handleSignIn, toastRef }) => {
  const handlePress = () => {
    onSignIn(handleSignIn, onLogged, toastRef)
  }

  return (
    <SocialIcon
      title={title}
      button
      type={type}
      onPress={handlePress}
      raised={false}
      disabled={disabled}
      loading={loading}
    />
  )
}

export default SocialSignInButton
