import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './styles'

import * as firebase from 'firebase'

export default function ListOfRestaurants ({ navigateTo, idRestaurant, setRating }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <View>
      {user ? (
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
        <Text
          style={styles.textNoLogged}
          onPress={() => navigateTo('login')}
        >
          Necesitar Iniciar sesión para escribir una opinión{'\n'}
          <Text style={styles.navigateToLogin}>Hazlo AQUÍ!</Text>
        </Text>
      )}
    </View>
  )
}
