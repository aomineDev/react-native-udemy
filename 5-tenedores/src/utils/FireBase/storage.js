import * as firebase from 'firebase'

export async function uploadImage (collection, uri, uid) {
  try {
    const response = await window.fetch(uri)
    const blob = await response.blob()
    const ref = firebase
      .storage()
      .ref(collection)
      .child(uid)

    return ref.put(blob)
  } catch (error) {
    return new Error('Error al subir la imagen')
  }
}

export async function getPhotoUrl (collection, uid) {
  try {
    const data = await firebase
      .storage()
      .ref(`${collection}/${uid}`)
      .getDownloadURL()

    const update = {
      photoURL: data
    }

    return update
  } catch (error) {
    return new Error('Error al obtener el avatar')
  }
}
