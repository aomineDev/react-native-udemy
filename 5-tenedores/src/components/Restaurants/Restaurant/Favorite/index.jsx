import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

import { create, remove, getRef } from 'utils/FireBase/firestore'
import { getCurrentUser } from 'utils/FireBase/auth'

import styles from './styles'

export default function Favorite ({ idRestaurant, isUserLogged, toastRef }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [favoriteId, setFavoriteId] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (!isUserLogged) return

    const { uid } = getCurrentUser()

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
  }, [])

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
    remove('favorites', favoriteId)
    setIsFavorite(false)
    setIsDisabled(false)
    toastRef.current.show('Restaurante removido de favoritos')
  }

  return (
    <View style={styles.viewFavorite}>
      <Icon
        name={isFavorite ? 'favorite' : 'favorite-border'}
        color={isFavorite ? '#f00' : '#000'}
        underlayColor='transparent'
        size={32}
        disabled={isDisabled}
        disabledStyle={{ backgroundColor: 'transparent' }}
        onPress={handlePress}
      />
    </View>
  )
}
