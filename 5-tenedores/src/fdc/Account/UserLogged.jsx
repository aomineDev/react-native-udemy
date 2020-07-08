import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { getCurrentUser } from 'utils/FireBase/auth'

import UserProfile from 'cfs/Account/UserLogged/UserProfile'
import UserDetails from 'cfs/Account/UserLogged/UserDetails'
import SignOutButton from 'cfs/Account/UserLogged/SignOutButton'
import Loader from 'components/Shared/Loader'

export default function UserLogged ({ toastRef }) {
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
      />
      <Loader isVisible={isLoading} />
    </View>
  )
}
