import React, { useRef, useState, useEffect } from 'react'

import { signOutUser, getCurrentUser } from 'utils/FireBase/auth'

import SignOutButton from 'components/Account/UserLogged/SignOutButton'
import UserProfile from 'components/Account/UserLogged/UserProfile'
import UserDetails from 'components/Account/UserLogged/UserDetails'
import Loader from 'components/Shared/Loader'
import Toast from 'components/Shared/Toast'

export default function UserLogged () {
  const toastRef = useRef()

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        setUser(user)
      })
      .catch(error => toastRef.current.show(error.message, 1000))
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
    <>
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
    </>
  )
}
