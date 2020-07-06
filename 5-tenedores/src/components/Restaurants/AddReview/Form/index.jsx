import React, { useState } from 'react'
import { View } from 'react-native'

import { useInputValue } from 'hooks/useInputValue'
import { create, getDocRef } from 'utils/FireBase/firestore'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

import styles from './styles'

export default function Form ({ rating, idRestaurant, goBack, toastRef }) {
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

  return (
    <View style={styles.formReview}>
      <InputForm
        placeholder='Titulo'
        value={title}
        onChange={setTitle}
        disabled={isDisabled}
      />
      <InputForm
        placeholder='Comentario...'
        value={review}
        onChange={setReview}
        isTextArea
        disabled={isDisabled}
      />
      <View style={styles.containerBtn}>
        <ButtonForm
          title='Enviar Comentario'
          onPress={handlePress}
          loading={isLoading}
        />
      </View>

    </View>
  )
}
