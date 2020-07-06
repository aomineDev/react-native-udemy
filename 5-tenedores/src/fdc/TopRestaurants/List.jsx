import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { getRef } from 'utils/FireBase/firestore'

import LoaderComponent from 'components/Shared/LoaderComponent'
import List from 'components/List'
import Item from 'cfs/TopRestaurants/Item'

export default function TopRestaurantsList () {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      const response = []

      getRef('restaurants')
        .orderBy('rating', 'desc')
        .limit(5)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const restaurant = doc.data()
            restaurant.id = doc.id
            response.push(restaurant)
          })

          setRestaurants(response)
          setIsLoading(false)
        })
    }, [])
  )

  if (isLoading) return <LoaderComponent />

  return (
    <List
      data={restaurants}
      renderItem={Item}
    />
  )
}
