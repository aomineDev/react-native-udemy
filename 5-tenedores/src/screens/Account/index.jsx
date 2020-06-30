import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'

import LoaderScreen from 'components/Shared/LoaderScreen'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account () {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setLogin(true) : setLogin(false)
    })
  }, [])

  if (login === null) return <LoaderScreen text='Cargando...' />

  return login ? <UserLogged /> : <UserGuest />
}
