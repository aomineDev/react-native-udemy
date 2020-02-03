import * as firebase from 'firebase/app'

export function registerUser (email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => resolve('Usuario registrado, Bienvenido 😊'))
      .catch(error => reject(error))
  })
}

export function loginUser (email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve('Ok'))
      .catch(error => reject(error))
  })
}

export function reloginUser (password) {
  const user = firebase.auth().currentUser
  const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password)

  return user.reauthenticateWithCredential(credentials)
}

export function getCurrentUser () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const { displayName, email, photoURL, uid } = await firebase.auth().currentUser
        resolve({
          displayName,
          email,
          photoURL,
          uid
        })
      } catch (error) {
        reject(error)
      }
    })()
  })
}

export function signOutUser () {
  firebase.auth().signOut()
}
