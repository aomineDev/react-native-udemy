import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export const PermissionsByImagePicker = async (
  uid,
  toastRef,
  handleReload,
  uploadAvatar,
  updatePhotoUrl
) => {
  const permissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)

  if (permissions.status === 'granted') {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1]
    })

    if (!cancelled) {
      handleReload(true)
      toastRef.current.show('Actualizando Avatar')
      uploadAvatar(uri, uid)
        .then(() => {
          updatePhotoUrl(uid, handleReload, toastRef)
        })
        .catch(() => toastRef.current.show('Error al subir el avatar'))
    }
  } else {
    toastRef.current.show('Es necesario aceptar los permisos de la galeria', 1000)
  }
}
