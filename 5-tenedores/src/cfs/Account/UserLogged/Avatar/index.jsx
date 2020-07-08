import React from 'react'
import { Avatar } from 'react-native-elements'

import { updateAvatar } from 'utils/FireBase/specifics/user'
import { uploadImage, getPhotoUrl } from 'utils/FireBase/storage'
import { permissionsByImagePicker, imagePicker } from 'utils/Permissions/imagePicker'

import styles from './styles'

export default function AvatarComponent ({
  uri,
  uid,
  toggleAwaitResponse,
  toastRef
}) {
  async function handleEditAvatar (uri) {
    try {
      toastRef.current.show('Actualizando avatar')
      toggleAwaitResponse(true)
      await uploadImage('avatar', uri, uid)
      const response = await getPhotoUrl('avatar', uid)
      const message = await updateAvatar(response)
      toastRef.current.show(message)
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    } finally {
      toggleAwaitResponse(false)
    }
  }

  async function handleEditPress () {
    try {
      const { status } = await permissionsByImagePicker()

      if (status === 'granted') {
        const { cancelled, uri } = await imagePicker(1, 1)

        if (!cancelled) {
          handleEditAvatar(uri)
        }
      } else {
        toastRef.current.show('Es necesario aceptar los permisos de la galeria', 1000)
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    }
  }

  return (
    <Avatar
      size='large'
      showEditButton
      rounded
      containerStyle={styles.avatar}
      source={{
        uri: uri ?? 'https://api.adorable.io/avatars/285/adorable.png'
      }}
      onEditPress={handleEditPress}
    />
  )
}
