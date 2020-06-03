import React from 'react'
import { YellowBox } from 'react-native'

// eslint-disable-next-line no-unused-vars
import firebase from 'utils/FireBase'

import Navigation from 'routes/router'

YellowBox.ignoreWarnings(['Setting a timer'])

export default function App () {
  return <Navigation />
}
