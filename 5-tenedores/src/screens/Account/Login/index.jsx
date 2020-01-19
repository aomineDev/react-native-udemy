import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import { onSignIn } from '../../../utils/FiresabeAuth'
import { onSignInWithFacebook, onSignInWithGoogle } from '../../../utils/FirebaseSocialAuth'

import LogoWrapper from '../../../layouts/Account/LogoWrapper'
import FormWrapper from '../../../layouts/Account/FormWrapper'

import SignInForm from '../../../components/Account/SignInForm'
import CreateAccount from '../../../components/Account/CreateAccount'
import SocialSignInButton from '../../../components/Account/SocialSignInButton'
import Toast from '../../../components/shared/Toast'

import globalStyles from '../../../assets/styles/globalStyles'
import styles from './styles'

const Login = ({ navigation }) => {
  const toastRef = useRef()
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)

  const handleSignIn = (value) => {
    setIsDisabled(value)
    setIsLoading(value)
  }

  const handleSignInWithFacebook = (value) => {
    setIsDisabled(value)
    setIsLoadingFacebook(value)
  }

  const handleSignInWithGoogle = (value) => {
    setIsDisabled(value)
    setIsLoadingGoogle(value)
  }

  return (
    <LogoWrapper>
      <FormWrapper>
        <SignInForm
          onSignIn={onSignIn}
          onLogged={() => navigation.navigate('Account')}
          disabled={isDisabled}
          loading={isLoading}
          handleSignIn={handleSignIn}
          toastRef={toastRef}
        />
      </FormWrapper>
      <View style={globalStyles.container}>
        <CreateAccount
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={globalStyles.container}>
        <SocialSignInButton
          title='Iniciar Sesión con Facebook'
          type='facebook'
          onSignIn={onSignInWithFacebook}
          onLogged={() => navigation.navigate('Account')}
          disabled={isDisabled}
          loading={isLoadingFacebook}
          handleSignIn={handleSignInWithFacebook}
        />
        <SocialSignInButton
          title='Iniciar Sesión con Google'
          type='google'
          onSignIn={onSignInWithGoogle}
          disabled={isDisabled}
          loading={isLoadingGoogle}
          handleSignIn={handleSignInWithGoogle}
        />
      </View>
      <Toast
        toastRef={toastRef}
        position='top'
      />
    </LogoWrapper>
  )
}

export default withNavigation(Login)
