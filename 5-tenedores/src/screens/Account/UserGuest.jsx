import React from 'react'
import { useNavigation } from '@react-navigation/native'

import UserGuestWrapper from 'layouts/Account/UserGuestWrapper'
import Content from 'components/Account/UserGuest/Content'
import RedirectionButton from 'components/Account/UserGuest/RedirectionButton'

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
