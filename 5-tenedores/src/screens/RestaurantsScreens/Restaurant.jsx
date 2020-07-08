import React, { useState, useRef } from 'react'
import * as firebase from 'firebase'

import RestaurantWrapper from 'wrappers/Restaurants/RestaurantWrapper'
import Favorite from 'fdc/RestaurantsScreens/Restaurant/Favorite'
import Details from 'fdc/RestaurantsScreens/Restaurant'
import AddReviewButton from 'fdc/RestaurantsScreens/Restaurant/AddReviewButton'
import ReviewsList from 'fdc/RestaurantsScreens/Restaurant/ReviewsList'
import Toast from 'components/Shared/Toast'

export default function Restaurant ({ navigation, route }) {
  const { params: { id, name } } = route
  const toastRef = useRef()

  const [restaurant, setRestaurant] = useState({})
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  firebase.auth().onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false)
  })

  navigation.setOptions({ title: name })

  function navigateTo (destiny, options = {}) {
    navigation.navigate(destiny, options)
  }

  return (
    <RestaurantWrapper>
      <Favorite
        idRestaurant={id}
        isUserLogged={isUserLogged}
        isLoading={isLoading}
        toastRef={toastRef}
      />
      <Details
        idRestaurant={id}
        restaurant={restaurant}
        setRestaurant={setRestaurant}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <AddReviewButton
        idRestaurant={id}
        isUserLogged={isUserLogged}
        isLoading={isLoading}
        navigateTo={navigateTo}
      />
      <ReviewsList
        idRestaurant={id}
        isLoading={isLoading}
      />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
    </RestaurantWrapper>
  )
}
