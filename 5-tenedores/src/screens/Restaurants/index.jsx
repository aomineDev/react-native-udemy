import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as firebase from 'firebase'

import { getAll } from 'utils/FireBase/firestore'
import { getLimitRestaurants, getMoreRestaurants } from 'utils/FireBase/specifics/restaurants'

import Wrapper from 'wrappers/Wrapper'
import RestaurantsList from 'components/Restaurants/Screen/ListOfRestaurants'
import FloatingButton from 'components/Shared/FloatingButton'

export default function Restaurant ({ navigation }) {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [totalRestaurants, setTotalRestaurants] = useState(0)
  const [startRestaurants, setStartRestaurants] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const limitRestaurants = 8

  firebase.auth().onAuthStateChanged(user => {
    user ? setUser(true) : setUser(false)
  })

  useFocusEffect(
    useCallback(() => {
      getAll('restaurants')
        .then(snap => {
          setTotalRestaurants(snap.size)
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
    navigation.navigate('add-restaurant')
  }

  return (
    <Wrapper>
      <RestaurantsList
        restaurants={restaurants}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
      {user && (
        <FloatingButton
          onPress={navigateTo}
          name='add'
          color='#fff'
          backgroundColor='#00a680'
        />
      )}
    </Wrapper>
  )
}
