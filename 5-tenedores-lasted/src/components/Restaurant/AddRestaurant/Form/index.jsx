import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import uuid from 'random-uuid-v4'

import { uploadData } from 'utils/FireBase/firestore'
import { uploadImage, getPhotoUrl } from 'utils/FireBase/storage'

import { useInputValue } from 'hooks/useInputValue'

import ImageRestaurnt from '../ImageRestaurnt'
import ImagesForm from '../ImagesForm'
import Map from '../Map'
import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

import styles from './styles'

export default function Form ({ toastRef, navigateTo }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [imagesSelected, setImageSelected] = useState([])
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [locationRestaurant, setLocationRestaurant] = useState(null)

  const [restaurantName, setRestaurantName] = useInputValue('')
  const [restaurantAddress, setRestaurantAddress] = useInputValue('')
  const [restaurantDescription, setRestaurantDescription] = useInputValue('')

  function createRestaurant () {
    if (!restaurantName || !restaurantAddress || !restaurantDescription) {
      toastRef.current.show('Todos los campos del formulario son obligatorios')
    } else if (imagesSelected.length === 0) {
      toastRef.current.show('El restaurante tiene que tener al menos una imagen')
    } else if (!locationRestaurant) {
      toastRef.current.show('Tienes que localizar el restaunte en el mapa')
    } else {
      setIsLoading(true)
      setIsDisabled(true)
      uploadImageStorage()
        .then(response => {
          const data = {
            name: restaurantName,
            address: restaurantAddress,
            description: restaurantDescription,
            location: locationRestaurant,
            images: response,
            rating: 0,
            ratingTotal: 0,
            quantityVoting: 0,
            createAt: new Date()
          }

          uploadData('restaurants', data)
            .then(() => {
              setIsLoading(false)
              setIsDisabled(false)
              navigateTo()
            })
            .catch(() => {
              setIsLoading(false)
              setIsDisabled(false)
              toastRef.current.show('Error al subir el restaurante, intentelo más tarde')
            })
        })
    }
  }

  async function uploadImageStorage () {
    const imagesBlob = []

    await asyncForEach(imagesSelected, async image => {
      const uid = uuid()

      await uploadImage('restaurants', image, uid)

      const { photoURL } = await getPhotoUrl('restaurants', uid)
      imagesBlob.push(photoURL)
    })

    return imagesBlob
  }

  async function asyncForEach (array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

  return (
    <ScrollView>
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
    </ScrollView>
  )
}
