import * as firebase from 'firebase/app'

export const uploadAvatar = async (uri, nameImage) => {
  const response = await window.fetch(uri)
  const blob = await response.blob()
  const ref = firebase
    .storage()
    .ref()
    .child(`avatar/${nameImage}`)
  return ref.put(blob)
}

export const updatePhotoUrl = (uid, handleReload, toastRef) => {
  firebase
    .storage()
    .ref(`avatar/${uid}`)
    .getDownloadURL()
    .then(async result => {
      const update = {
        photoURL: result
      }
      await firebase.auth().currentUser.updateProfile(update)
      handleReload(false)
      toastRef.current.show('Avatar actualizado')
    })
    .catch(() => toastRef.current.show('Error al obtener el avatar', 1000))
}
