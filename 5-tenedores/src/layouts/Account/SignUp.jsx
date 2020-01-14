import React from 'react'
import { withNavigation } from 'react-navigation'

import { onSignUp } from '../../utils/FireBaseActions'

import SignUpForm from '../../components/Account/SignUpForm'

const SignUp = ({ navigation }) => {
  return (
    <SignUpForm
      onSignUp={onSignUp}
      onRegistered={() => navigation.navigate('Account')}
    />
  )
}

export default withNavigation(SignUp)
