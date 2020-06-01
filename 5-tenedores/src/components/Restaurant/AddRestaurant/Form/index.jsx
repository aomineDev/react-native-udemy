import React, { useState, useEffect } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { Icon, Avatar, Image, Button } from 'react-native-elements'
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import * as firebase from 'firebase/app'
import uuid from 'random-uuid-v4'

import { permissionsByImagePicker, imagePicker } from 'utils/Permissions/imagePicker'
import { useInputValue } from 'hooks/useInputValue'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

import ModalWrapper from 'layouts/ModalWrapper'

import styles from './styles'

const db = firebase.firestore()

export default function Form ({ toastRef, setIsLoading, redirect }) {
  const [imagesSelected, setImageSelected] = useState([])
  const [restaurantName, setRestaurantName] = useInputValue('')
  const [restaurantAddress, setRestaurantAddress] = useInputValue('')
  const [restaurantDescription, setRestaurantDescription] = useInputValue('')
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [locationRestaurant, setLocationRestaurant] = useState(null)

  function createRestaurant () {
    if (!restaurantName || !restaurantAddress || !restaurantDescription) {
      toastRef.current.show('Todos los campos del formulario son obligatorios')
    } else if (imagesSelected.length === 0) {
      toastRef.current.show('El restaurante tiene que tener al menos una imagen')
    } else if (!locationRestaurant) {
      toastRef.current.show('Tienes que localizar el restaunte en el mapa')
    } else {
      setIsLoading(true)
      uploadImageStorage()
        .then(response => {
          db.collection('restaurants').add({
            name: restaurantName,
            address: restaurantAddress,
            description: restaurantDescription,
            location: locationRestaurant,
            images: response,
            rating: 0,
            ratingTotal: 0,
            quantityVoting: 0,
            createAt: new Date(),
            createBy: firebase.auth().currentUser.uid
          })
            .then(() => {
              setIsLoading(false)
              redirect.navigate('Restaurants')
            })
            .catch(() => {
              setIsLoading(false)
              toastRef.current.show('Error al subir el restaurante, intentelo más tarde')
            })
        })
    }
  }

  async function uploadImageStorage () {
    const imagesBlob = []

    await asyncForEach(imagesSelected, async image => {
      const response = await window.fetch(image)
      const blob = await response.blob()
      const ref = firebase.storage().ref('restaurants').child(uuid())
      await ref.put(blob).then(async result => {
        await firebase
          .storage()
          .ref(`restaurants/${result.metadata.name}`)
          .getDownloadURL()
          .then(photoUrl => {
            imagesBlob.push(photoUrl)
          })
      })
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
      <ImageRestaurant imageRestaurant={imagesSelected[0]} />
      <FormAdd
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
        setRestaurantDescription={setRestaurantDescription}
        setIsVisibleMap={setIsVisibleMap}
        locationRestaurant={locationRestaurant}
      />
      <UploadImage
        imagesSelected={imagesSelected}
        setImagesSelected={setImageSelected}
        toastRef={toastRef}
      />
      <View style={styles.btnContainer}>
        <ButtonForm
          title='Crear Restaurant'
          onPress={createRestaurant}
          containerStyle={styles.btnAddRestaurant}
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

function ImageRestaurant ({ imageRestaurant }) {
  return (
    <View
      style={styles.viewPhoto}
    >
      {imageRestaurant ? (
        <Image
          source={{ uri: imageRestaurant }}
          style={styles.image}
        />
      ) : (
        <Image
          source={require('../../../../assets/img/restaurant/add-restaurant/no-image.png')}
          style={styles.image}
        />
      )}
    </View>
  )
}

function UploadImage ({ imagesSelected, setImagesSelected, toastRef }) {
  async function handleIconPress () {
    try {
      const { status } = await permissionsByImagePicker()

      if (status === 'granted') {
        const { cancelled, uri } = await imagePicker(4, 3)

        if (!cancelled) {
          toastRef.current.show('Imagen seleccionada')
          setImagesSelected([...imagesSelected, uri])
        }
      } else {
        toastRef.current.show('Es necesario aceptar los permisos de la galeria', 1000)
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    }
  }

  function removeImage (uri) {
    const newImagesSelected = imagesSelected.filter(image => image !== uri)
    setImagesSelected(newImagesSelected)
    toastRef.current.show('Imagen eliminada')
  }

  function handleImagePress (uri) {
    Alert.alert(
      'Eliminar imagen',
      '¿Estas seguro de que quieres eliminar esta imagen?',
      [
        {
          text: 'cancel',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: () => removeImage(uri)
        }
      ])
  }

  return (
    <View style={styles.viewImages}>
      {imagesSelected.length < 5 && (
        <Icon
          name='add-a-photo'
          color='#7a7a7a'
          underlayColor='transparent'
          containerStyle={styles.containerIcon}
          onPress={handleIconPress}
        />
      )}

      {imagesSelected.map(image => (
        <Avatar
          key={image}
          onPress={() => handleImagePress(image)}
          style={styles.miniature}
          source={{ uri: image }}
        />
      ))}
    </View>
  )
}

function FormAdd ({
  setRestaurantName,
  setRestaurantAddress,
  setRestaurantDescription,
  setIsVisibleMap,
  locationRestaurant
}) {
  function handleIconPress () {
    setIsVisibleMap(true)
  }
  return (
    <View style={styles.viewForm}>
      <InputForm
        placeholder='Nombre del restaurante'
        onChange={setRestaurantName}
      />
      <InputForm
        placeholder='Dirección'
        onChange={setRestaurantAddress}
        iconName='person-pin-circle'
        handleIconPress={handleIconPress}
        isMap
        locationRestaurant={locationRestaurant}
      />
      <InputForm
        placeholder='Descripción del restaurante'
        onChange={setRestaurantDescription}
        multiline
        isTextArea
      />
    </View>
  )
}

function Map ({ isVisibleMap, setIsVisibleMap, setLocationRestaurant, toastRef }) {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({})

        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        })
      } else {
        toastRef.current.show('Es necesario aceptar los permisos de localización', 1000)
      }
    })()
  }, [])

  function confirmLocation () {
    setLocationRestaurant(location)
    toastRef.current.show('Localización guardada correctamente')
    setIsVisibleMap(false)
  }

  return (
    <ModalWrapper
      isVisible={isVisibleMap}
      setIsVisible={setIsVisibleMap}
    >
      <View>
        {location && (
          <MapView
            style={styles.mapStyle}
            initialRegion={location}
            showsUserLocation
            onRegionChange={region => setLocation(region)}
          >
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
              }}
              draggable
            >
            </MapView.Marker>
          </MapView>
        )}
        <View style={styles.viewMapBtn}>
          <Button
            title='Guardar Ubicación'
            buttonStyle={styles.viewMapBtnSave}
            onPress={confirmLocation}
          />
          <Button
            title='Cancelar Ubicación'
            onPress={() => setIsVisibleMap(false)}
            buttonStyle={styles.viewMapBtnCancel}
          />
        </View>
      </View>
    </ModalWrapper>
  )
}
