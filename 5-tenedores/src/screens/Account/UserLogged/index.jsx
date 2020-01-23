import React, { useRef, useState, useEffect } from 'react'

import { onSignOut, currentUser } from '../../../utils/FireBase/auth'
import { PermissionsByImagePicker } from '../../../utils/Permissions'
import { uploadAvatar, updatePhotoUrl } from '../../../utils/FireBase/storage'

import SignOutButton from '../../../components/Account/UserLogged/SignOutButton'
import UserProfile from '../../../components/Account/UserLogged/UserProfile'
import Loading from '../../../components/shared/Loading'
import Toast from '../../../components/shared/Toast'

// import styles from './styles'

export default function UserLogged () {
  const toastRef = useRef()

  const [user, setUser] = useState({})
  const [reload, setReload] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    currentUser()
      .then(user => {
        setUser(user)
      })
      .catch(error => toastRef.current.show(error, 1000))
    setReload(false)
  }, [reload])

  function handleReload (value) {
    setLoading(value)
    setReload(!value)
  }

  function onEditAvatar () {
    PermissionsByImagePicker(
      user.uid,
      toastRef,
      handleReload,
      uploadAvatar,
      updatePhotoUrl
    )
  }

  return (
    <>
      <UserProfile
        {...user}
        onEditAvatar={onEditAvatar}
        handleReload={handleReload}
        toastRef={toastRef}
      />
      <SignOutButton onPress={onSignOut} />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
      <Loading isVisible={loading} />
    </>
  )
}
