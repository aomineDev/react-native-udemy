import React from 'react'
import { View, Text } from 'react-native'

import { updateAvatar } from 'utils/FireBase/user'
import { uploadAvatar, updatePhotoUrl } from 'utils/FireBase/storage'
import { permissionsByImagePicker, imagePicker } from 'utils/Permissions/imagePicker'

import Avatar from '../Avatar'

import styles from './styles'

export default function UserProfile ({
  uid,
  photoURL,
  displayName,
  email,
  toggleAwaitResponse,
  toastRef
}) {
  async function handleEditAvatar (uri) {
    try {
      toastRef.current.show('Actualizando avatar')
      toggleAwaitResponse(true)
      await uploadAvatar(uri, uid)
      const response = await updatePhotoUrl(uid)
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
        const { cancelled, uri } = await imagePicker()

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
    <View style={styles.view}>
      <Avatar
        onEditPress={handleEditPress}
        size='large'
        showEditButton
        rounded
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
