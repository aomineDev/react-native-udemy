import * as firebase from 'firebase/app'

export function updateDisplayName (update) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .updateProfile(update)
      .then(() => resolve('Nombre de usuario actualizado'))
      .catch(error => reject(error))
  })
}

export function updateEmail (email) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .updateEmail(email)
      .then(() => resolve('Email actualizado'))
      .catch(error => reject(error))
  })
}
