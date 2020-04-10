import * as firebase from 'firebase/app'

export function updateAvatar (update) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .updateProfile(update)
      .then(() => resolve('Avatar actualizado'))
      .catch(error => reject(error))
  })
}

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

export function updatePassword (password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .updatePassword(password)
      .then(() => resolve('Contraseña actualizada'))
      .catch(error => reject(error))
  })
}
