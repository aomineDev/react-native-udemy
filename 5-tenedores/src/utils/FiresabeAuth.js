import * as firebase from 'firebase/app'

export const onSignUp = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => resolve('Usuario creado correctamente'))
      .catch((error) => reject(error))
  })
}

export const onSignIn = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve('Ok'))
      .catch((error) => reject(error))
  })
}

export const onSignOut = () => {
  firebase.auth().signOut()
}
