import React from 'react'
import { SocialIcon } from 'react-native-elements'

export default function SocialLoginButton (props) {
  return (
    <SocialIcon
      {...props}
      button
      raised={false}
    />
  )
}
