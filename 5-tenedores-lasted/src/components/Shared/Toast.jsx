import React from 'react'
import Toast from 'react-native-easy-toast'

export default function ToastCompoment ({ toastRef, position }) {
  const positionValue = position === 'bottom' ? 200 : 120

  return (
    <Toast
      ref={toastRef}
      style={{ borderRadius: 50 }}
      position={position}
      positionValue={positionValue}
      opacity={0.75}
    />
  )
}
