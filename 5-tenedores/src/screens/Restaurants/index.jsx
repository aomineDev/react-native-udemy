import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button'
import * as firebase from 'firebase'

export default function Restaurant ({ navigation }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  return (
    <View style={styles.viewBody}>
      <Text>Estamos en Restaurantes.</Text>
      {user && <AddRestaurantButton navigation={navigation} />}
    </View>
  )
}

const AddRestaurantButton = ({ navigation }) => (
  <ActionButton
    buttonColor='#00a680'
    onPress={() => navigation.navigate('AddRestaurant')}
  />
)

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
})
