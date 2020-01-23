import React from 'react'

import Router from './src/routes/router'

// eslint-disable-next-line no-unused-vars
import { firebaseApp } from './src/utils/FireBase'

import './src/utils/settingATimer'

function App () {
  return <Router />
}

export default App
