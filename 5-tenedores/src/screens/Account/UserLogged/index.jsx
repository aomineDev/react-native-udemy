import React, { useRef, useState, useEffect } from 'react'

import { signOutUser, getCurrentUser } from 'utils/FireBase/auth'

import SignOutButton from 'components/Account/UserLogged/SignOutButton'
import UserProfile from 'components/Account/UserLogged/UserProfile'
import UserDetails from 'components/Account/UserLogged/UserDetails'
import Loading from 'components/shared/Loading'
import Toast from 'components/shared/Toast'

// import styles from './styles'

export default function UserLogged () {
  const toastRef = useRef()

  const [user, setUser] = useState({})
  const [reload, setReload] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        setUser(user)
      })
      .catch(error => toastRef.current.show(error, 1000))
    setReload(false)
  }, [reload])

  function toggleAwaitResponse (value) {
    setLoading(value)
    setReload(!value)
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
      <UserDetails />
      <SignOutButton
        title='Cerrar sesión'
        onPress={handleSignOutButtonPress}
      />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
      <Loading isVisible={loading} />
    </>
  )
}
