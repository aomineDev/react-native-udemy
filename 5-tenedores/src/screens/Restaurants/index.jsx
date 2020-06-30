import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as firebase from 'firebase'

import { getAllData } from 'utils/FireBase/firestore'
import { getLimitRestaurants, getMoreRestaurants } from 'utils/FireBase/restaurants'

import RestaurantWrapper from 'layouts/Restaurants/RestaurantWrapper'
import ListOfRestaurants from 'components/Restaurants/ListOfRestaurants'
import AddFloatingButton from 'components/Shared/AddFloatingButton'

export default function Restaurant ({ navigation }) {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [totalRestaurants, setTotalRestaurants] = useState(0)
  const [startRestaurants, setStartRestaurants] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const limitRestaurants = 8

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  useFocusEffect(
    useCallback(() => {
      getAllData('restaurants')
        .then(snap => {
          setTotalRestaurants(snap.size)
        })

      const resultRestaurants = []

      getLimitRestaurants(limitRestaurants)
        .then(querySnapshot => {
          setStartRestaurants(querySnapshot.docs[querySnapshot.docs.length - 1])

          querySnapshot.forEach(doc => {
            const restaurant = doc.data()
            restaurant.id = doc.id
            resultRestaurants.push(restaurant)
          })

          setRestaurants(resultRestaurants)
        })
    }, [])
  )

  function handleLoadMore () {
    if (restaurants.length === totalRestaurants) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)

    const resultRestaurants = []

    getMoreRestaurants(startRestaurants, limitRestaurants)
      .then(querySnapshot => {
        setStartRestaurants(querySnapshot.docs[querySnapshot.docs.length - 1])

        querySnapshot.forEach(doc => {
          const restaurant = doc.data()
          restaurant.id = doc.id
          resultRestaurants.push(restaurant)
        })

        setRestaurants([...restaurants, ...resultRestaurants])
      })
  }

  function navigateTo () {
    navigation.navigate('addRestaurant')
  }

  return (
    <RestaurantWrapper>
      <ListOfRestaurants
        restaurants={restaurants}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
      {user && <AddFloatingButton navigateTo={navigateTo} />}
    </RestaurantWrapper>
  )
}
