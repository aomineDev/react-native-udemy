import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function ButtonForm ({ isForEditForm, ...props }) {
  return (
    <Button
      {...props}
      containerStyle={isForEditForm ? styles.btnEditFormContainer : styles.btnFormContainer}
      buttonStyle={styles.btnForm}
      disabledStyle={styles.btnFormDisabled}

    />
  )
}
