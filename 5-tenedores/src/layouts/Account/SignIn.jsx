import React from 'react'
import { withNavigation } from 'react-navigation'

import SignInForm from '../../components/Account/SignInForm'

const SignIn = ({ navigation }) => (
  <SignInForm
    createAccountHandler={() => navigation.navigate('Register')}
  />
)

export default withNavigation(SignIn)
