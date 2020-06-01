import * as firebase from 'firebase/app'

export async function uploadAvatar (uri, nameImage) {
  try {
    const response = await window.fetch(uri)
    const blob = await response.blob()
    const ref = firebase
      .storage()
      .ref('avatar')
      .child(nameImage)
    return ref.put(blob)
  } catch (error) {
    return new Error('Error al subir el avatar')
  }
}

export function updatePhotoUrl (uid) {
  return new Promise((resolve, reject) => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(result => {
        const update = {
          photoURL: result
        }
        resolve(update)
      })
      .catch(() => reject(new Error('Error al obtener el avatar')))
  })
}
