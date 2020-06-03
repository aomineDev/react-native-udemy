import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

export function permissionsByLocation () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const permissions = await Permissions.askAsync(Permissions.LOCATION)

        resolve(permissions)
      } catch (error) {
        reject(new Error('Ocurrio un error con los permisis de localización.'))
      }
    })()
  })
}

export function getCurrentPosition () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const location = await Location.getCurrentPositionAsync({})

        resolve(location)
      } catch (error) {
        reject(new Error('Ocurrio un error. inténtelo más tarde es este csmr'))
      }
    })()
  })
}
