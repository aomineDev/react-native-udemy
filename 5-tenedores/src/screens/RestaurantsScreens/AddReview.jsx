import React, { useRef } from 'react'
import * as firebase from 'firebase'

import AddReviewWrapper from 'wrappers/Restaurants/AddReviewWrapper'
import Form from 'fdc/RestaurantsScreens/AddReview/Form'
import Toast from 'components/Shared/Toast'

export default function AddReview ({ navigation, route }) {
  firebase.auth().onAuthStateChanged(user => {
    user || navigateTo()
  })

  const { params: { idRestaurant } } = route
  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('restaurants')
  }

  function goBack () {
    navigation.goBack()
  }

  return (
    <AddReviewWrapper>
      <Form
        idRestaurant={idRestaurant}
        goBack={goBack}
        toastRef={toastRef}
      />
      <Toast
        toastRef={toastRef}
        position='center'
      />
    </AddReviewWrapper>
  )
}
