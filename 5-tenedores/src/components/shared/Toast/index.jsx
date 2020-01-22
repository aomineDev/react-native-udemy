import React from 'react'
import Toast from 'react-native-easy-toast'

export default function ToastCompoment ({ toastRef, position }) {
  return (
    <Toast
      ref={toastRef}
      style={{ borderRadius: 50 }}
      position={position}
      opacity={0.75}
    />
  )
}
