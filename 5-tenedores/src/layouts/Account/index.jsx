import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import { withNavigation } from 'react-navigation'

import { onSignOut } from '../../utils/FireBaseActions'

import UserGuest from '../../components/Account/UserGuest'
import UserLogged from '../../components/Account/UserLogged'

import Loading from '../../components/shared/Loading'

const AccountHandler = ({ navigation }) => {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setLogin(true) : setLogin(false)
    })
  }, [])

  if (login === null) return <Loading isVisible text='Cargando...' />

  return login
    ? <UserLogged onSignOut={onSignOut} />
    : <UserGuest onPress={() => navigation.navigate('Login')} />
}

export default withNavigation(AccountHandler)
