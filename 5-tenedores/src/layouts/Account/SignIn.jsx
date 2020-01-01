import React from 'react'
import { withNavigation } from 'react-navigation'

import SignInForm from '../../components/Account/SignInForm'

const SignIn = ({ navigation }) => <SignInForm />

export default withNavigation(SignIn)
