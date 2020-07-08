import React, { useState, useEffect } from 'react'

import { create, remove, getRef } from 'utils/FireBase/firestore'
import { getCurrentUser } from 'utils/FireBase/auth'

import FavIcon from 'cfs/RestaurantsScreens/Restaurant/FavIcon'

export default function Favorite ({ idRestaurant, isUserLogged, isLoading, toastRef }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [favoriteId, setFavoriteId] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (!isUserLogged) return

    const { uid } = getCurrentUser()
    setIsFavorite(false)

    getRef('favorites')
      .where('idRestaurant', '==', idRestaurant)
      .where('createBy', '==', uid)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length === 1) {
          querySnapshot.forEach(doc => {
            setFavoriteId(doc.id)
          })
          setIsFavorite(true)
        }
      })
  }, [isUserLogged, idRestaurant])

  function addFavorite () {
    const payload = {
      idRestaurant
    }

    setIsFavorite(true)

    create('favorites', payload)
      .then(querySnapshot => {
        setFavoriteId(querySnapshot.id)
        setIsDisabled(false)
        toastRef.current.show('Restaurante añadido a favoritos')
      })
  }

  function removeFavorite () {
    setIsFavorite(false)

    remove('favorites', favoriteId)
      .then(() => {
        setIsDisabled(false)
        toastRef.current.show('Restaurante removido de favoritos')
      })
  }

  function handlePress () {
    if (!isUserLogged) {
      toastRef.current.show('Es necesario iniciar sesión')
      return
    }

    setIsDisabled(true)

    isFavorite
      ? removeFavorite()
      : addFavorite()
  }

  if (isLoading) return <></>

  return (
    <FavIcon
      isFavorite={isFavorite}
      isDisabled={isDisabled}
      onPress={handlePress}
    />
  )
}
