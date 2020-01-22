import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAeLIBMxF4f-2Kz4BVj58bUtc0-IkmGMMM',
  authDomain: 'tenedores-312d5.firebaseapp.com',
  databaseURL: 'https://tenedores-312d5.firebaseio.com',
  projectId: 'tenedores-312d5',
  storageBucket: 'tenedores-312d5.appspot.com',
  messagingSenderId: '227109528988',
  appId: '1:227109528988:web:825d301c012a53eb9ed459'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
