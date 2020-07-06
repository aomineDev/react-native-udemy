import React, { useState, useCallback, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import * as firebase from 'firebase'

import { get } from 'utils/FireBase/firestore'

import RestaurantWrapper from 'wrappers/Restaurants/RestaurantWrapper'
import Favorite from 'components/Restaurants/Restaurant/Favorite'
import Slider from 'components/Restaurants/Restaurant/Slider'
import RestaurantHeader from 'components/Restaurants/Restaurant/RestaurantHeader'
import RestaurantInfo from 'components/Restaurants/Restaurant/RestaurantInfo'
import ReviewsList from 'components/Restaurants/Restaurant/ListOfReviews'
import LoaderScreen from 'components/Shared/LoaderScreen'
import Toast from 'components/Shared/Toast'

const screenWidth = Dimensions.get('window').width

export default function Restaurant ({ navigation, route }) {
  const { params: { id, name } } = route
  const toastRef = useRef()

  const [restaurant, setRestaurant] = useState(null)
  const [isUserLogged, setIsUserLogged] = useState(false)

  firebase.auth().onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false)
  })

  navigation.setOptions({ title: name })

  useFocusEffect(
    useCallback(() => {
      get('restaurants', id)
        .then(querySnapshot => {
          const data = querySnapshot.data()
          data.id = querySnapshot.id
          setRestaurant(data)
        })
    }, [id])
  )

  function navigateTo (destiny, options = {}) {
    navigation.navigate(destiny, options)
  }

  if (!restaurant) return <LoaderScreen />

  return (
    <RestaurantWrapper>
      <Favorite
        idRestaurant={restaurant.id}
        isUserLogged={isUserLogged}
        toastRef={toastRef}
      />
      <Slider
        arrayImages={restaurant.images}
        height={250}
        width={screenWidth}
      />
      <RestaurantHeader
        {...restaurant}
      />
      <RestaurantInfo
        {...restaurant}
      />
      <ReviewsList
        navigateTo={navigateTo}
        idRestaurant={restaurant.id}
        isUserLogged={isUserLogged}
      />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
    </RestaurantWrapper>
  )
}
