import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import * as firebase from 'firebase'

import Form from 'fdc/RestaurantsScreens/AddRestaurant/Form'
import Toast from 'components/Shared/Toast'

export default function AddRestaurant ({ navigation }) {
  firebase.auth().onAuthStateChanged(user => {
    user || navigateTo()
  })

  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('restaurants')
  }

  function goBack () {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <Form
        goBack={goBack}
        toastRef={toastRef}
      />
      <Toast
        toastRef={toastRef}
        position='center'
      />
    </ScrollView>
  )
}
