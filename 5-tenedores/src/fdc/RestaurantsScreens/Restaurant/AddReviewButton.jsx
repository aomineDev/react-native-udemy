import React from 'react'

import UnloggedUser from 'components/UnloggedUser'
import Button from 'cfs/RestaurantsScreens/Restaurant/AddReviewButton'

export default function AddReviewButton ({ navigateTo, idRestaurant, isUserLogged, isLoading }) {
  function handlePress () {
    navigateTo('add-review', {
      idRestaurant
    })
  }

  if (isLoading) return <></>

  if (!isUserLogged) return <UnloggedUser text='Necesitar Iniciar sesión para escribir una opinión' />

  return <Button onPress={handlePress} />
}
