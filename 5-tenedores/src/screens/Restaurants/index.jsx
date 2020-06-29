import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'

import RestaurantWrapper from 'layouts/Restaurants/RestaurantWrapper'
import Restaurants from 'components/Restaurant/Restaurants'
import AddFloatingButton from 'components/Shared/AddFloatingButton'

const db = firebase.firestore()

export default function Restaurant ({ navigation }) {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [totalRestaurants, setTotalRestaurants] = useState(0)
  const [startRestaurants, setStartRestaurants] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const limitRestaurants = 10

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  useEffect(() => {
    db.collection('restaurants').get().then(snap => {
      setTotalRestaurants(snap.size)
    })

    const resultRestaurants = []

    db.collection('restaurants')
      .orderBy('createAt', 'desc')
      .limit(limitRestaurants)
      .get()
      .then(response => {
        setStartRestaurants(response.docs[response.docs.length - 1])

        response.forEach(querySnapshot => {
          const restaurant = querySnapshot.data()
          restaurant.id = querySnapshot.id
          resultRestaurants.push(restaurant)
        })

        setRestaurants(resultRestaurants)
      })
  }, [])

  function handleLoadMore () {
    if (restaurants.length === totalRestaurants) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)

    const resultRestaurants = []

    db.collection('restaurants')
      .orderBy('createAt', 'desc')
      .startAfter(startRestaurants.data().createAt)
      .limit(limitRestaurants)
      .get()
      .then(response => {
        setStartRestaurants(response.docs[response.docs.length - 1])

        response.forEach(querySnapshot => {
          const restaurant = querySnapshot.data()
          restaurant.id = querySnapshot.id
          resultRestaurants.push(restaurant)
        })

        setRestaurants([...restaurants, ...resultRestaurants])
      })
  }

  function navigateTo () {
    navigation.navigate('AddRestaurant')
  }

  return (
    <RestaurantWrapper>
      <Restaurants
        restaurants={restaurants}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
      {user && <AddFloatingButton navigateTo={navigateTo} />}
    </RestaurantWrapper>
  )
}
