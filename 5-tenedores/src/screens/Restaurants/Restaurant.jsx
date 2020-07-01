import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import { getData } from 'utils/FireBase/firestore'

import RestaurantWrapper from 'layouts/Restaurants/RestaurantWrapper'
import LoaderScreen from 'components/Shared/LoaderScreen'
import Slider from 'components/Restaurants/Screens/Restaurant/Slider'
import RestaurantHeader from 'components/Restaurants/Screens/Restaurant/RestaurantHeader'
import RestaurantInfo from 'components/Restaurants/Screens/Restaurant/RestaurantInfo'
import ListOfReviews from 'components/Restaurants/Screens/Restaurant/ListOfReviews'

const screenWidth = Dimensions.get('window').width

export default function Restaurant ({ navigation, route }) {
  const { params: { id, name } } = route
  const [restaurant, setRestaurant] = useState(null)
  const [rating, setRating] = useState(0)

  navigation.setOptions({ title: name })

  useEffect(() => {
    getData('restaurants', id)
      .then(querySnapshot => {
        const data = querySnapshot.data()
        data.id = querySnapshot.id
        setRestaurant(data)
        setRating(data.rating)
      })
  }, [])

  function navigateTo (destiny, options = {}) {
    navigation.navigate(destiny, options)
  }

  if (!restaurant) return <LoaderScreen />

  return (
    <RestaurantWrapper>
      <Slider
        arrayImages={restaurant.images}
        height={250}
        width={screenWidth}
      />
      <RestaurantHeader
        {...restaurant}
        rating={rating}
      />
      <RestaurantInfo
        {...restaurant}
      />
      <ListOfReviews
        navigateTo={navigateTo}
        idRestaurant={restaurant.id}
        setRating={setRating}
      />
    </RestaurantWrapper>
  )
}
