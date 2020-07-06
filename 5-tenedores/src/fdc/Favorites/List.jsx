import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as firebase from 'firebase'

import { getIdRestaurants, getRestaurants } from 'utils/FireBase/specifics/favorites'
import { getCurrentUser } from 'utils/FireBase/auth'
import { sortArrayDesc } from 'utils/sortArray'

import LoaderComponent from 'components/Shared/LoaderComponent'
import NoContent from 'components/NoContent'
import UnloggedUser from 'components/UnloggedUser'
import List from 'components/List'
import Item from '../../cfs/Favorites/Item'

export default function FavoritesList ({ toastRef }) {
  const [restaurants, setRestaurants] = useState([])
  const [isUserLogged, setIsUserLogged] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  firebase.auth().onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false)
  })

  useFocusEffect(
    useCallback(() => {
      if (!isUserLogged) return

      const { uid } = getCurrentUser()
      const response = []

      getIdRestaurants(uid)
        .then(favorites => {
          const favoritesSorted = favorites.sort(sortArrayDesc('createAt'))

          getRestaurants(favoritesSorted)
            .then(queySnapshot => {
              queySnapshot.forEach((doc, i) => {
                const restaurant = doc.data()
                restaurant.id = doc.id
                restaurant.favoriteId = favoritesSorted[i].id
                response.push(restaurant)
              })

              setRestaurants(response)
              setIsLoading(false)
            })
        })
    }, [isUserLogged])
  )

  if (isUserLogged === null) return <LoaderComponent />

  if (!isUserLogged) return <UnloggedUser text='Necesitas iniciar sesión' />

  if (isLoading) return <LoaderComponent />

  if (!restaurants.length) return <NoContent text='Aún no tienes restaurnates favoritos' />

  return (
    <List
      data={restaurants}
      setData={setRestaurants}
      renderItem={Item}
      toastRef={toastRef}
    />
  )
}
