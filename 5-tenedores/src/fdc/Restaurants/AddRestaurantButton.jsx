import React, { useState } from 'react'
import * as firebase from 'firebase'

import FloatingButton from 'components/Shared/FloatingButton'

export default function AddRestaurantButton (props) {
  const [user, setUser] = useState(null)

  firebase.auth().onAuthStateChanged(user => {
    user ? setUser(true) : setUser(false)
  })

  if (!user) return <></>

  return (
    <FloatingButton
      {...props}
      name='add'
      color='#fff'
      backgroundColor='#00a680'
    />
  )
}
