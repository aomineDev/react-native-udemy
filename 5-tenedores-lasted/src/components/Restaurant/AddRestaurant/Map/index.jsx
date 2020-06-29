import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps'

import { permissionsByLocation, getCurrentPosition } from 'utils/Permissions/location'

import ModalWrapper from 'layouts/ModalWrapper'

import styles from './styles'

export default function Map ({ isVisibleMap, setIsVisibleMap, setLocationRestaurant, toastRef }) {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const { status } = await permissionsByLocation()

        if (status === 'granted') {
          const { coords } = await getCurrentPosition()

          setLocation({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          })
        } else {
          toastRef.current.show('Es necesario aceptar los permisos de localización', 1000)
        }
      } catch (error) {
        toastRef.current.show(error.message, 1000)
      }
    })()
  }, [])

  function confirmLocation () {
    setLocationRestaurant(location)
    toastRef.current.show('Localización guardada correctametne')
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
            style={styles.viewMap}
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
            />
          </MapView>
        )}
        <View
          style={styles.viewBtns}
        >
          <Button
            title='Guardar Ubicación'
            containerStyle={styles.containerBtnSave}
            buttonStyle={styles.btnSave}
            onPress={confirmLocation}
          />
          <Button
            title='Cancelar'
            buttonStyle={styles.btnCancel}
            onPress={() => setIsVisibleMap(false)}
          />
        </View>
      </View>
    </ModalWrapper>
  )
}
