import React from 'react'
import { View } from 'react-native'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

import styles from './styles'

export default function Form ({ setTitle, setReview, isDisabled, isLoading, ...props }) {
  return (
    <View style={styles.formReview}>
      <InputForm
        placeholder='Titulo'
        onChange={setTitle}
        disabled={isDisabled}
      />
      <InputForm
        placeholder='Comentario...'
        onChange={setReview}
        isTextArea
        disabled={isDisabled}
      />
      <View style={styles.containerBtn}>
        <ButtonForm
          title='Enviar Comentario'
          loading={isLoading}
          {...props}
        />
      </View>

    </View>
  )
}
