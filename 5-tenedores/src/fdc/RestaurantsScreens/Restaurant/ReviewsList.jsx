import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { getRef } from 'utils/FireBase/firestore'
import { sortArrayDesc } from 'utils/sortArray'

import List from 'cfs/RestaurantsScreens/Restaurant/ReviewsList'

export default function ReviewsList ({ idRestaurant, isLoading }) {
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

  if (isLoading) return <></>

  return <List reviews={reviews} />
}
