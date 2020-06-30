import React from 'react'
import { YellowBox } from 'react-native'

// eslint-disable-next-line no-unused-vars
import firebase from 'utils/FireBase'

import Navigation from 'navigation'

YellowBox.ignoreWarnings(['Setting a timer', 'Animated: `useNativeDriver` was not specified'])

export default function App () {
  return <Navigation />
}
