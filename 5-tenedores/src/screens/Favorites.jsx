import React, { useRef } from 'react'

import Wrapper from 'wrappers/Wrapper'
import List from 'fdc/Favorites/List'
import Toast from 'components/Shared/Toast'

export default function Favorites () {
  const toastRef = useRef()

  return (
    <Wrapper>
      <List toastRef={toastRef} />
      <Toast
        toastRef={toastRef}
        position='bottom'
      />
    </Wrapper>
  )
}
