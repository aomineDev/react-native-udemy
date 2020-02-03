import * as firebase from 'firebase/app'

export function updateProfile (update) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .currentUser
      .updateProfile(update)
      .then(() => resolve('Ok'))
      .catch(error => reject(error))
  })
}
