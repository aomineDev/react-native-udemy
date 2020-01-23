import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'

import { onSignIn } from '../../utils/FireBase/auth'
import { onSignInWithFacebook, onSignInWithGoogle } from '../../utils/FireBase/socialAuth'

import LogoWrapper from '../../layouts/Account/LogoWrapper'
import FormWrapper from '../../layouts/Account/FormWrapper'

import SignInForm from '../../components/Account/Login/SignInForm'
import CreateAccount from '../../components/Account/Login/CreateAccount'
import SocialSignInButton from '../../components/Account/Login/SocialSignInButton'
import Divider from '../../components/shared/Divider'
import Toast from '../../components/shared/Toast'

import globalStyles from '../../assets/styles/globalStyles'

const Login = ({ navigation }) => {
  const toastRef = useRef()
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)

  function handleSignIn (value) {
    setIsDisabled(value)
    setIsLoading(value)
  }

  function handleSignInWithFacebook (value) {
    setIsDisabled(value)
    setIsLoadingFacebook(value)
  }

  function handleSignInWithGoogle (value) {
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
      <Divider />
      <View style={globalStyles.container}>
        <SocialSignInButton
          title='Iniciar Sesión con Facebook'
          type='facebook'
          onSignIn={onSignInWithFacebook}
          onLogged={() => navigation.navigate('Account')}
          disabled={isDisabled}
          loading={isLoadingFacebook}
          handleSignIn={handleSignInWithFacebook}
          toastRef={toastRef}
        />
        <SocialSignInButton
          title='Iniciar Sesión con Google'
          type='google'
          onSignIn={onSignInWithGoogle}
          onLogged={() => navigation.navigate('Account')}
          disabled={isDisabled}
          loading={isLoadingGoogle}
          handleSignIn={handleSignInWithGoogle}
          toastRef={toastRef}
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
