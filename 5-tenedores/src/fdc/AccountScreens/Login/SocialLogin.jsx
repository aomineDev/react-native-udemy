import React from 'react'

import {
  facebookPermissions,
  loginUserWithFacebook,
  googlePermissions,
  loginUserWithGoogle
} from 'utils/FireBase/socialAuth'

import SocialLogin from 'cfs/AccountScreens/Login/SocialLogin'

export default function SocialLoginForm ({
  navigateTo,
  setIsDisabled,
  toggleAwaitRequest,
  isDisabled,
  isLoadingFacebook,
  isLoadingGoogle,
  toastRef
}) {
  async function handleFacebookButtonPress () {
    try {
      setIsDisabled(true)
      const { type, token } = await facebookPermissions()

      if (type === 'success') {
        toggleAwaitRequest(true, 'facebook')
        await loginUserWithFacebook(token)
        toggleAwaitRequest(false, 'facebook')
        navigateTo('account')
      } else {
        toggleAwaitRequest(false, 'facebook')
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
      toggleAwaitRequest(false, 'facebook')
    }
  }

  async function handleGooleButtonPress () {
    try {
      setIsDisabled(true)
      const { type, idToken, accessToken } = await googlePermissions()

      if (type === 'success') {
        toggleAwaitRequest(true, 'google')
        await loginUserWithGoogle(idToken, accessToken)
        toggleAwaitRequest(false, 'google')
        navigateTo('account')
      } else {
        toggleAwaitRequest(false, 'google')
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
      toggleAwaitRequest(false, 'google')
    }
  }

  return (
    <SocialLogin
      isDisabled={isDisabled}
      isLoadingFacebook={isLoadingFacebook}
      handleFacebookButtonPress={handleFacebookButtonPress}
      isLoadingGoogle={isLoadingGoogle}
      handleGooleButtonPress={handleGooleButtonPress}
    />
  )
}
