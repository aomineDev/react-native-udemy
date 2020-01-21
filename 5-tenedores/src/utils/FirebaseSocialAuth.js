import * as firebase from 'firebase/app'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import { FacebookApi, GoogleApi } from '../config/social'

export const onSignInWithFacebook = async (handleSignIn, onLogged, toastRef) => {
  try {
    await Facebook.initializeAsync(FacebookApi.appId)
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: FacebookApi.permissions
    })

    if (type === 'success') {
      handleSignIn(true)

      const credentials = firebase.auth.FacebookAuthProvider.credential(token)

      firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => onLogged())
        .catch(() => {
          toastRef.current.show('Ocurrio un error, intentelo más tarde')
          handleSignIn(false)
        })
    } else {
      handleSignIn(false)
    }
  } catch (error) {
    toastRef.current.show(`Facebook Login Error: ${error.message}`)
  }
}

export const onSignInWithGoogle = async (handleSignIn, onLogged, toastRef) => {
  try {
    const { type, idToken, accessToken } = await Google.logInAsync(GoogleApi.config)

    if (type === 'success') {
      handleSignIn(true)

      const credentials = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken)

      firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => onLogged())
        .catch(() => {
          toastRef.current.show('Ocurrio un error, intentelo más tarde')
          handleSignIn(false)
        })
    } else {
      toastRef.current.show('Ocurrio un error, intentelo más tarde')
    }
  } catch (error) {
    toastRef.current.show(`Google Login Error: ${error.message}`)
  }
}
