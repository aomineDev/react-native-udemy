import React from 'react'
import { Alert } from 'react-native'
import { Avatar } from 'react-native-elements'

import styles from './styles'

export default function Carousel ({ imagesSelected, setImagesSelected, isDisabled, toastRef }) {
  function handleImagePress (uri) {
    if (isDisabled) return
    Alert.alert(
      'Eliminar imagen',
      '¿Estás seguro de que quieres eliminar esta imagen?',
      [
        {
          text: 'cancel',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: () => removeImage(uri)
        }
      ]
    )
  }

  function removeImage (uri) {
    const newImagesSelected = imagesSelected.filter(image => image !== uri)

    setImagesSelected(newImagesSelected)
    toastRef.current.show('Imagen eliminada')
  }

  return (
    <>
      {imagesSelected.map(image => (
        <Avatar
          key={image}
          onPress={() => handleImagePress(image)}
          style={styles.miniature}
          source={{ uri: image }}
        />
      ))}
    </>
  )
}
