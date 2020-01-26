import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export function permissionsByImagePicker () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const permissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)

        resolve(permissions)
      } catch (error) {
        reject(new Error('Ocurrio un error. inténtelo más tarde'))
      }
    })()
  })
}

export function imagePicker () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1]
        })

        resolve(response)
      } catch (error) {
        reject(new Error('Ocurrio un error. inténtelo más tarde'))
      }
    })()
  })
}
