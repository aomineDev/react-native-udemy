import React, { useState } from 'react'
import { Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function FavIcon ({ remove }) {
  const [isFavorite, setIsFavorite] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)

  function handlePress () {
    Alert.alert(
      'Eliminar de favoritos',
      '¿Estas seguro de que deseas eliminar este restaurante de tus favoritos?',
      [
        {
          text: 'cancel',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: removeFavorite
        }
      ]
    )
  }

  function removeFavorite () {
    setIsFavorite(false)
    setIsDisabled(true)
    remove()
  }

  return (
    <Icon
      name={isFavorite ? 'favorite' : 'favorite-border'}
      disabled={isDisabled}
      color={isFavorite ? '#f00' : '#000'}
      size={35}
      containerStyle={styles.containerIcon}
      disabledStyle={styles.disabledIcon}
      onPress={handlePress}
    />
  )
}
