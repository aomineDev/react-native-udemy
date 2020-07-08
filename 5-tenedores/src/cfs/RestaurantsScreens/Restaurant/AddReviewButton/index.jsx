import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function AddReviewButton (props) {
  return (
    <Button
      title='Escribe una opinión'
      buttonStyle={styles.btnAddReview}
      titleStyle={styles.btnTitleAddReview}
      containerStyle={styles.btnContainerAddReview}
      icon={{
        name: 'create',
        color: '#00a680'
      }}
      {...props}
    />
  )
}
