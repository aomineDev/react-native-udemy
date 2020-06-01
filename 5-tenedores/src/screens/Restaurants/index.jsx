import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import * as firebase from 'firebase'

import RestaurantWrapper from 'layouts/Restaurants/RestaurantWrapper'
import AddRestaurantButton from '../../components/Restaurant/AddRestaurantButton'

export default function Restaurant ({ navigation }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  return (
    <RestaurantWrapper>
      <Text>Estamos en Restaurantes.</Text>
      {user && <AddRestaurantButton navigation={navigation} />}
    </RestaurantWrapper>
  )
}
