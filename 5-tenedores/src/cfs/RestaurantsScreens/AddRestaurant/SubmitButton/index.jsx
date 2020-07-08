import React from 'react'
import { View } from 'react-native'

import ButtonForm from 'components/Form/ButtonForm'

import styles from './styles'

export default function SubmitButton ({ isLoading, ...props }) {
  return (
    <View style={styles.viewFormBtn}>
      <ButtonForm
        title='Crear Restaurant'
        loading={isLoading}
        {...props}
      />
    </View>
  )
}
