import React from 'react'
import { View, Text } from 'react-native'

import { updateProfile } from 'utils/FireBase/user'

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
  async function handleEditAvatar (uri) {
    try {
      toastRef.current.show('Actualizando avatar')
      toggleAwaitResponse(true)

      await uploadAvatar(uri, uid)
      const response = await updatePhotoUrl(uid)
      await updateProfile(response)
      toastRef.current.show('Avatar actualizado')
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
