import React from 'react'
import { Icon } from 'react-native-elements'

import { permissionsByImagePicker, imagePicker } from 'utils/Permissions/imagePicker'

import styles from './styles'

export default function UploadImage ({ imagesSelected, setImagesSelected, isDisabled, toastRef }) {
  async function handlePress () {
    try {
      const { status } = await permissionsByImagePicker()

      if (status === 'granted') {
        const { cancelled, uri } = await imagePicker(4, 3)

        if (!cancelled) {
          toastRef.current.show('Imagen Seleccionada')
          setImagesSelected([...imagesSelected, uri])
        }
      } else {
        toastRef.current.show('Es necesario aceptar los permisos de la galeria', 1000)
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    }
  }

  return (
    <>
      {imagesSelected.length < 5 && (
        <Icon
          name='add-a-photo'
          color='#7a7a7a'
          underlayColor='transparent'
          containerStyle={styles.containerIcon}
          disabled={isDisabled}
          onPress={handlePress}
        />
      )}
    </>
  )
}
