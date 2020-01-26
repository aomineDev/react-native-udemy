import * as firebase from 'firebase/app'

export async function uploadAvatar (uri, nameImage) {
  const response = await window.fetch(uri)
  const blob = await response.blob()
  const ref = firebase
    .storage()
    .ref()
    .child(`avatar/${nameImage}`)
  return ref.put(blob)
}

export function updatePhotoUrl (uid) {
  return new Promise((resolve, reject) => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async result => {
        const update = {
          photoURL: result
        }
        await firebase.auth().currentUser.updateProfile(update)
        resolve('ok')
      })
      .catch(() => reject(new Error('Error al obtener el avatar')))
  })
}
