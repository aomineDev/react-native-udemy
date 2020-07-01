import React from 'react'
import MapView from 'react-native-maps'
import openMap from 'react-native-open-maps'

export default function Map ({ location, name, height }) {
  const { latitude, longitude } = location

  function openAppMap () {
    openMap({
      latitude,
      longitude,
      zoom: 19,
      query: name
    })
  }

  return (
    <MapView
      style={{ height, width: '100%' }}
      initialRegion={location}
      onPress={openAppMap}
    >
      <MapView.Marker
        coordinate={{
          latitude,
          longitude
        }}
      >
      </MapView.Marker>
    </MapView>
  )
}
