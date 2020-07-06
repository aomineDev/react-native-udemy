import React from 'react'
import { useNavigation } from '@react-navigation/native'

import UserGuestWrapper from 'wrappers/Account/UserGuestWrapper'
import Content from 'components/Account/Screen/UserGuest/Content'
import RedirectionButton from 'components/Account/Screen/UserGuest/RedirectionButton'

export default function UserGuest () {
  const navigation = useNavigation()

  function navigateTo () {
    navigation.navigate('login')
  }

  return (
    <UserGuestWrapper>
      <Content />
      <RedirectionButton
        title='Ver tu perfil'
        onPress={navigateTo}
      />
    </UserGuestWrapper>
  )
}
