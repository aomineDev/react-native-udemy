import React from 'react'

import AddReviewWrapper from 'layouts/Restaurants/AddReviewWrapper'
import Rating from 'components/Restaurants/Screens/AddReview/Rating'
import Form from 'components/Restaurants/Screens/AddReview/Form'

export default function AddReview ({ route }) {
  const { params: { idRestaurant } } = route

  console.log(idRestaurant)

  return (
    <AddReviewWrapper>
      <Rating />
      <Form />
    </AddReviewWrapper>
  )
}
