import React, { useRef, useState, useEffect } from 'react'
import { View } from 'react-native'

import { signOutUser, getCurrentUser } from 'utils/FireBase/auth'

import SignOutButton from 'components/Account/Screen/UserLogged/SignOutButton'
import UserProfile from 'components/Account/Screen/UserLogged/UserProfile'
import UserDetails from 'components/Account/Screen/UserLogged/UserDetails'
import Loader from 'components/Shared/Loader'
import Toast from 'components/Shared/Toast'

export default function UserLogged () {
  const toastRef = useRef()

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const response = getCurrentUser()
    setUser(response)
    setReload(false)
  }, [reload])

  function toggleAwaitResponse (value) {
    setIsLoading(value)
    if (!value) setReload(!value)
  }

  function handleSignOutButtonPress () {
    signOutUser()
  }

  return (
    <View>
      <UserProfile
        {...user}
        toggleAwaitResponse={toggleAwaitResponse}
        toastRef={toastRef}
      />
      <UserDetails
        {...user}
        setReload={setReload}
        toastRef={toastRef}
      />
      <SignOutButton
        title='Cerrar sesión'
        onPress={handleSignOutButtonPress}
      />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
      <Loader isVisible={isLoading} />
    </View>
  )
}
