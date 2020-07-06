import React, { useState } from 'react'
import * as firebase from 'firebase'

import LoaderScreen from 'components/Shared/LoaderScreen'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account () {
  const [isUserLogged, setIisUserLogged] = useState(null)

  firebase.auth().onAuthStateChanged(user => {
    user ? setIisUserLogged(true) : setIisUserLogged(false)
  })

  if (isUserLogged === null) return <LoaderScreen text='Cargando...' />

  return isUserLogged ? <UserLogged /> : <UserGuest />
}
