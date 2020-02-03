import * as firebase from 'firebase/app'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import { FacebookApi, GoogleApi } from 'config/social'

export function loginUserWithFacebook () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        await Facebook.initializeAsync(FacebookApi.appId)

        const response = await Facebook.logInWithReadPermissionsAsync({
          permissions: FacebookApi.permissions
        })

        resolve(response)
      } catch (error) {
        reject(new Error('Ocurrio un error, inténtelo más tarde'))
      }
    })()
  })
}

export function LoginUserWithFacebookCredentials (token) {
  return new Promise((resolve, reject) => {
    const credentials = firebase.auth.FacebookAuthProvider.credential(token)

    firebase
      .auth()
      .signInWithCredential(credentials)
      .then(() => resolve('Ok'))
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          reject(new Error('Este email ya esta en uso con un diferente proveedor'))
        } else {
          reject(new Error('Ocurrio un error, inténtelo más tarde'))
        }
      })
  })
}

export function loginUserWithGoogle () {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await Google.logInAsync(GoogleApi.config)

        resolve(response)
      } catch (error) {
        reject(new Error('Ocurrio un error, inténtelo más tarde'))
      }
    })()
  })
}

export function LoginUserWithGoogleCredentials (idToken, accessToken) {
  return new Promise((resolve, reject) => {
    const credentials = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken)

    firebase
      .auth()
      .signInWithCredential(credentials)
      .then(() => resolve('Ok'))
      .catch(error => reject(error))
  })
}
