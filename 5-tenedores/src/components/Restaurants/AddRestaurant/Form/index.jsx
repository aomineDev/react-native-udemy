import React, { useState } from 'react'
import { View } from 'react-native'
import uuid from 'random-uuid-v4'

import { create } from 'utils/FireBase/firestore'
import { uploadImage, getPhotoUrl } from 'utils/FireBase/storage'
import { asyncForEach } from 'utils/asyncForEach'

import { useInputValue } from 'hooks/useInputValue'

import ImageRestaurnt from '../ImageRestaurnt'
import ImagesForm from '../ImagesForm'
import Map from '../Map'
import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

import styles from './styles'

export default function Form ({ toastRef, goBack }) {
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

  function createRestaurant () {
    const isValid = validateForm()
    if (!isValid) return

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

  return (
    <View>
      <ImageRestaurnt imageRestaurant={imagesSelected[0]} />
      <View style={styles.viewForm}>
        <InputForm
          placeholder='Nombre del restaurante'
          disabled={isDisabled}
          onChange={setRestaurantName}
        />
        <InputForm
          placeholder='Dirección'
          iconName='person-pin-circle'
          isMap
          locationRestaurant={locationRestaurant}
          disabled={isDisabled}
          onChange={setRestaurantAddress}
          handleIconPress={() => setIsVisibleMap(true)}
        />
        <InputForm
          placeholder='Descripción del restaurante'
          multiline
          isTextArea
          disabled={isDisabled}
          onChange={setRestaurantDescription}
        />
      </View>
      <ImagesForm
        imagesSelected={imagesSelected}
        setImagesSelected={setImageSelected}
        isDisabled={isDisabled}
        toastRef={toastRef}
      />
      <View style={styles.viewFormBtn}>
        <ButtonForm
          title='Crear Restaurant'
          loading={isLoading}
          onPress={createRestaurant}
        />
      </View>
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationRestaurant={setLocationRestaurant}
        toastRef={toastRef}
      />
    </View>
  )
}
