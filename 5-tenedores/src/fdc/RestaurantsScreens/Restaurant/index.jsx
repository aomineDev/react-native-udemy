import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Dimensions } from 'react-native'

import { get } from 'utils/FireBase/firestore'

import Slider from 'cfs/RestaurantsScreens/Restaurant/Slider'
import RestaurantHeader from 'cfs/RestaurantsScreens/Restaurant/RestaurantHeader'
import RestaurantInfo from 'cfs/RestaurantsScreens/Restaurant/RestaurantInfo'
import LoaderComponent from 'components/Shared/LoaderComponent'

const screenWidth = Dimensions.get('window').width

export default function Restaurant ({
  idRestaurant,
  restaurant,
  setRestaurant,
  isLoading,
  setIsLoading
}) {
  useFocusEffect(
    useCallback(() => {
      get('restaurants', idRestaurant)
        .then(querySnapshot => {
          const data = querySnapshot.data()
          data.id = querySnapshot.id
          setRestaurant(data)
          setIsLoading(false)
        })
    }, [idRestaurant])
  )

  if (isLoading) return <LoaderComponent />

  return (
    <>
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
    </>
  )
}
