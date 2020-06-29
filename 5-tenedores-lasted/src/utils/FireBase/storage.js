import * as firebase from 'firebase'

export async function uploadImage (root, uri, uid) {
  try {
    const response = await window.fetch(uri)
    const blob = await response.blob()
    const ref = firebase
      .storage()
      .ref(root)
      .child(uid)

    return ref.put(blob)
  } catch (error) {
    return new Error('Error al subir la imagen')
  }
}

export async function getPhotoUrl (root, uid) {
  try {
    const data = await firebase
      .storage()
      .ref(`${root}/${uid}`)
      .getDownloadURL()

    const update = {
      photoURL: data
    }

    return update
  } catch (error) {
    return new Error('Error al obtener el avatar')
  }
}
