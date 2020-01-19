import * as firebase from 'firebase/app'

// facebook
import * as Facebook from 'expo-facebook'
import { FacebookApi } from '../config/social'
import { Alert } from 'react-native'

export const onSignInWithFacebook = async (handleSignIn, onLogged) => {
  try {
    await Facebook.initializeAsync(FacebookApi.app_id)
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
      behavior: 'web'
    })

    console.log('type', type)
    console.log('token', token)
    if (type === 'success') {
      handleSignIn(true)
      const response = await window.fetch(`https://graph.facebook.com/me?access_token=${token}`)
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
      const credentials = await firebase.auth.FacebookAuthProvider.credential(token)
      console.log(credentials)
    } else {
      handleSignIn(false)
    }
  } catch (error) {
    window.alert(`Facebook Login Error: ${error.message}`)
    console.log(error)
  }
}

export const onSignInWithGoogle = async (handleSignIn, onLogged) => {
  try {
    handleSignIn(true)
    window.setTimeout(() => {
      handleSignIn(false)
    }, 3000)
    console.log('testeando')
  } catch (error) {
    window.alert(`Google Login Error: ${error.message}`)
    console.log(error)
  }
}
