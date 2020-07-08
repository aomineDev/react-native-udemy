import React, { useState } from 'react'
import uuid from 'random-uuid-v4'

import { create } from 'utils/FireBase/firestore'
import { uploadImage, getPhotoUrl } from 'utils/FireBase/storage'
import { asyncForEach } from 'utils/asyncForEach'

import { useInputValue } from 'hooks/useInputValue'

import ImageRestaurnt from 'cfs/RestaurantsScreens/AddRestaurant/ImageRestaurnt'
import ImagesForm from 'cfs/RestaurantsScreens/AddRestaurant/ImagesForm'
import Map from 'cfs/RestaurantsScreens/AddRestaurant/Map'
import Form from 'cfs/RestaurantsScreens/AddRestaurant/Form'
import SubmitButton from 'cfs/RestaurantsScreens/AddRestaurant/SubmitButton'

export default function AddRestaurantForm ({ toastRef, goBack }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [imagesSelected, setImageSelected] = useState([])
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [locationRestaurant, setLocationRestaurant] = useState(null)

  const [restaurantName, setRestaurantName] = useInputValue('')
  const [restaurantAddress, setRestaurantAddress] = useInputValue('')
  const [restaurantDescription, setRestaurantDescription] = useInputValue('')

  function validateForm () {
    let isValid = false
    if (!restaurantName || !restaurantAddress || !restaurantDescription) {
      toastRef.current.show('Todos los campos del formulario son obligatorios')
    } else if (imagesSelected.length === 0) {
      toastRef.current.show('El restaurante tiene que tener al menos una imagen')
    } else if (!locationRestaurant) {
      toastRef.current.show('Tienes que localizar el restaunte en el mapa')
    } else {
      isValid = true
    }

    return isValid
  }

  async function uploadImageStorage () {
    const imagesUrl = []

    await asyncForEach(imagesSelected, async image => {
      const uid = uuid()

      await uploadImage('restaurants', image, uid)

      const { photoURL } = await getPhotoUrl('restaurants', uid)
      imagesUrl.push(photoURL)
    })

    return imagesUrl
  }

  function createRestaurant () {
    setIsLoading(true)
    setIsDisabled(true)
    uploadImageStorage()
      .then(imagesUrl => {
        const payload = {
          name: restaurantName,
          address: restaurantAddress,
          description: restaurantDescription,
          location: locationRestaurant,
          images: imagesUrl,
          rating: 0,
          ratingTotal: 0,
          quantityVoting: 0
        }

        create('restaurants', payload)
          .then(() => goBack())
          .catch(() => {
            setIsLoading(false)
            setIsDisabled(false)
            toastRef.current.show('Error al subir el restaurante, intentelo más tarde')
          })
      })
  }

  function handlePress () {
    const isValid = validateForm()
    if (!isValid) return
    createRestaurant()
  }

  return (
    <>
      <ImageRestaurnt imageRestaurant={imagesSelected[0]} />
      <Form
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
        setRestaurantDescription={setRestaurantDescription}
        locationRestaurant={locationRestaurant}
        setIsVisibleMap={setIsVisibleMap}
        isDisabled={isDisabled}
      />
      <ImagesForm
        imagesSelected={imagesSelected}
        setImagesSelected={setImageSelected}
        isDisabled={isDisabled}
        toastRef={toastRef}
      />
      <SubmitButton
        isLoading={isLoading}
        onPress={handlePress}
      />
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationRestaurant={setLocationRestaurant}
        toastRef={toastRef}
      />
    </>
  )
}
