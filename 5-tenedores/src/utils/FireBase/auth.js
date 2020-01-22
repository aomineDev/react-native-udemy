import * as firebase from 'firebase/app'

export function onSignUp (email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => resolve('Usuario creado correctamente'))
      .catch((error) => reject(error))
  })
}

export function onSignIn (email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve('Ok'))
      .catch((error) => reject(error))
  })
}

export function currentUser () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const { displayName, email, photoURL } = await firebase.auth().currentUser
        resolve({
          displayName,
          email,
          photoURL
        })
      } catch (error) {
        reject(error)
      }
    })()
  })
}

export function onSignOut () {
  firebase.auth().signOut()
}
