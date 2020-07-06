import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import { getRef } from 'utils/FireBase/firestore'
import { sortArrayDesc } from 'utils/sortArray'

import UnloggedUser from 'components/UnloggedUser'
import Review from '../Review'

import styles from './styles'

export default function ReviewsList ({ navigateTo, idRestaurant, isUserLogged }) {
  const [reviews, setReviews] = useState([])

  useFocusEffect(
    useCallback(() => {
      const response = []

      getRef('reviews')
        .where('idRestaurant', '==', idRestaurant)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const review = doc.data()
            review.id = doc.id
            response.push(review)
          })

          const responseSorted = response.sort(sortArrayDesc('createAt'))

          setReviews(responseSorted)
        })
    }, [idRestaurant])
  )

  return (
    <View>
      {isUserLogged ? (
        <Button
          title='Escribe una opinión'
          buttonStyle={styles.btnAddReview}
          titleStyle={styles.btnTitleAddReview}
          containerStyle={styles.btnContainerAddReview}
          onPress={() => navigateTo('add-review', {
            idRestaurant
          })}
          icon={{
            name: 'create',
            color: '#00a680'
          }}
        />
      ) : (
        <UnloggedUser text='Necesitar Iniciar sesión para escribir una opinión' />
      )}

      {reviews.map(data => (
        <Review
          data={data}
          key={data.id}
        />
      ))}
    </View>
  )
}
