import React from 'react'
import { View } from 'react-native'

import SocialLoginButton from './SocialLoginButton'

import globalStyles from 'assets/styles/globalStyles'

export default function SocialLogin ({
  isDisabled,
  isLoadingFacebook,
  handleFacebookButtonPress,
  isLoadingGoogle,
  handleGooleButtonPress
}) {
  return (
    <View style={globalStyles.container}>
      <SocialLoginButton
        title='Iniciar Sesión con Facebook'
        type='facebook'
        disabled={isDisabled}
        loading={isLoadingFacebook}
        onPress={handleFacebookButtonPress}
      />
      <SocialLoginButton
        title='Iniciar Sesión con Google'
        type='google'
        disabled={isDisabled}
        loading={isLoadingGoogle}
        onPress={handleGooleButtonPress}
      />
    </View>
  )
}
