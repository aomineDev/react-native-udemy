import React, { useState } from 'react'

import { useInputValue } from 'hooks/useInputValue'
import { create, getDocRef } from 'utils/FireBase/firestore'

import Form from 'cfs/RestaurantsScreens/AddReview/Form'
import Rating from 'cfs/RestaurantsScreens/AddReview/Rating'

export default function AddReviewForm ({ idRestaurant, goBack, toastRef }) {
  const [rating, setRating] = useState(0)
  const [title, setTitle] = useInputValue('')
  const [review, setReview] = useInputValue('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisbled] = useState(false)

  function validateForm () {
    let isValid = false
    if (!rating) {
      toastRef.current.show('Es necesario puntuar el restaurante')
    } else if (!title || !review) {
      toastRef.current.show('Todos los campos son obligatorios')
    } else {
      isValid = true
    }

    return isValid
  }

  function updateRestaurant () {
    const restaurantRef = getDocRef('restaurants', idRestaurant)

    restaurantRef
      .get()
      .then(response => {
        const restaurantData = response.data()
        const ratingTotal = restaurantData.ratingTotal + rating
        const quantityVoting = restaurantData.quantityVoting + 1
        const ratingResult = ratingTotal / quantityVoting

        restaurantRef.update({
          rating: ratingResult,
          ratingTotal,
          quantityVoting
        })
          .then(() => goBack())
      })
  }

  function handlePress () {
    const isValid = validateForm()
    if (!isValid) return

    setIsLoading(true)
    setIsDisbled(true)

    const payload = {
      idRestaurant,
      rating,
      title,
      review
    }

    create('reviews', payload, true)
      .then(() => updateRestaurant())
      .catch(() => {
        setIsLoading(false)
        setIsDisbled(false)
        toastRef.current.show('Ocurrio un error intentelo más tarde', 1000)
      })
  }

  return (
    <>
      <Rating setRating={setRating} />
      <Form
        setTitle={setTitle}
        setReview={setReview}
        isDisabled={isDisabled}
        isLoading={isLoading}
        onPress={handlePress}
      />
    </>
  )
}
