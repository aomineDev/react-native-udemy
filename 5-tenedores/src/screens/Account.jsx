import React, { useState, useRef } from 'react'
import * as firebase from 'firebase'

import LoaderScreen from 'components/Shared/LoaderScreen'
import UserGuestWrapper from '../wrappers/Account/UserGuestWrapper'
import Content from 'cfs/Account/UserGuest/Content'
import RedirectionButton from '../cfs/Account/UserGuest/RedirectionButton'
import UserLogged from 'fdc/Account/UserLogged'
import Toast from 'components/Shared/Toast'

export default function Account ({ navigation }) {
  const [isUserLogged, setIisUserLogged] = useState(null)

  const toastRef = useRef()

  firebase.auth().onAuthStateChanged(user => {
    user ? setIisUserLogged(true) : setIisUserLogged(false)
  })

  function navigateTo () {
    navigation.navigate('login')
  }

  if (isUserLogged === null) return <LoaderScreen text='Cargando...' />

  if (!isUserLogged) {
    return (
      <UserGuestWrapper>
        <Content />
        <RedirectionButton
          title='Ver tu perfil'
          onPress={navigateTo}
        />
      </UserGuestWrapper>
    )
  }

  return (
    <>
      <UserLogged toastRef={toastRef} />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
    </>
  )
}
