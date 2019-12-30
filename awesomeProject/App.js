import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Loading from './components/shared/Loading.jsx'

const App =  () => {
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(0)
  let loadingText = isLoading ? 'Loading...' : '¡Complete!'

  useEffect(() => {
    console.log('Use effect executed')
  }, [isLoading])

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>funca esta wea dijo el Riac neitif :v</Text>
      <Loading text={loadingText} />
      {value === 0 && <Text>Puro cpp del tio pio</Text>}
      <Text>Value: {value}</Text>
      <Button title="Increse +1" onPress={() => setValue(value + 1)} />
      <Button title="Decrease -1" onPress={() => setValue(value - 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#212121',
  }
})

export default App
