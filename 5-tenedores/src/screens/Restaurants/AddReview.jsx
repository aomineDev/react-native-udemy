import React, { useState, useRef } from 'react'
import * as firebase from 'firebase'

import AddReviewWrapper from 'wrappers/Restaurants/AddReviewWrapper'
import Rating from 'components/Restaurants/AddReview/Rating'
import Form from 'components/Restaurants/AddReview/Form'
import Toast from 'components/Shared/Toast'

export default function AddReview ({ navigation, route }) {
  firebase.auth().onAuthStateChanged(user => {
    user || navigateTo()
  })

  const { params: { idRestaurant } } = route
  const toastRef = useRef()
  const [rating, setRating] = useState(0)

  function navigateTo () {
    navigation.navigate('restaurants')
  }

  function goBack () {
    navigation.goBack()
  }

  return (
    <AddReviewWrapper>
      <Rating setRating={setRating} />
      <Form
        rating={rating}
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
