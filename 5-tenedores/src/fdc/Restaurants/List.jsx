import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { getAll } from 'utils/FireBase/firestore'
import { getLimitRestaurants, getMoreRestaurants } from 'utils/FireBase/specifics/restaurants'

import LoaderComponent from 'components/Shared/LoaderComponent'
import NoContent from 'components/NoContent'
import List from 'components/List'
import Item from 'cfs/Restaurants/Item'

export default function RestaurantsList () {
  const [restaurants, setRestaurants] = useState([])
  const [totalRestaurants, setTotalRestaurants] = useState(0)
  const [startRestaurants, setStartRestaurants] = useState(null)
  const [isLoadingScreen, setIsLoadingScreen] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const limitRestaurants = 8

  useFocusEffect(
    useCallback(() => {
      getAll('restaurants')
        .then(querySnapshot => {
          setTotalRestaurants(querySnapshot.size)
        })

      const response = []

      getLimitRestaurants(limitRestaurants)
        .then(querySnapshot => {
          setStartRestaurants(querySnapshot.docs[querySnapshot.docs.length - 1])

          querySnapshot.forEach(doc => {
            const restaurant = doc.data()
            restaurant.id = doc.id
            response.push(restaurant)
          })

          setRestaurants(response)
          setIsLoadingScreen(false)
        })
    }, [])
  )

  function handleLoadMore () {
    if (restaurants.length === totalRestaurants) return

    setIsLoadingMore(true)

    const response = []

    getMoreRestaurants(startRestaurants, limitRestaurants)
      .then(querySnapshot => {
        setStartRestaurants(querySnapshot.docs[querySnapshot.docs.length - 1])

        querySnapshot.forEach(doc => {
          const restaurant = doc.data()
          restaurant.id = doc.id
          response.push(restaurant)
        })

        setRestaurants([...restaurants, ...response])
        setIsLoadingMore(false)
      })
  }

  if (isLoadingScreen) return <LoaderComponent />

  if (!restaurants.length) return <NoContent text='Aún no hay restaurantes creados' />

  return (
    <List
      data={restaurants}
      renderItem={Item}
      handleLoadMore={handleLoadMore}
      isLoading={isLoadingMore}
      isInfinityScroll
    />
  )
}
