import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import { permissionsByImagePicker, imagePicker } from 'utils/Permissions/imagePicker'
import { uploadAvatar, updatePhotoUrl } from 'utils/FireBase/storage'

import Avatar from '../Avatar'

export default function UserProfile ({
  uid,
  photoURL,
  displayName,
  email,
  toggleAwaitResponse,
  toastRef
}) {
  function handleEditAvatar (uri) {
    toastRef.current.show('Actualizando Avatar')
    toggleAwaitResponse(true)

    uploadAvatar(uri, uid)
      .then(async () => {
        await updatePhotoUrl(uid)
        toastRef.current.show('Avatar actualizado')
        toggleAwaitResponse(false)
      })
      .catch(() => {
        toastRef.current.show('Error al subir el avatar')
        toggleAwaitResponse(false)
      })
  }

  async function handleEditPress () {
    try {
      const { status } = await permissionsByImagePicker()

      if (status === 'granted') {
        const { cancelled, uri } = await imagePicker()

        if (!cancelled) {
          handleEditAvatar(uri)
        }
      } else {
        toastRef.current.show('Es necesario aceptar los permisos de la galeria', 1000)
      }
    } catch (error) {
      toastRef.current.show('Ocurrio un error, inténtelo más tarde', 1000)
    }
  }

  return (
    <View style={styles.view}>
      <Avatar
        onEditPress={handleEditPress}
        size='large'
        uri={photoURL}
      />
      <View>
        <Text style={styles.name}>
          {displayName ?? 'Anónimo'}
        </Text>
        <Text>
          {email}
        </Text>
      </View>
    </View>
  )
}
