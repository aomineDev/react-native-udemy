import React from 'react'
import Toast from 'react-native-easy-toast'

const ToastCompoment = ({ toastRef, position }) => (
  <Toast
    ref={toastRef}
    style={{ borderRadius: 50 }}
    position={position}
    opacity={0.75}
  />
)

export default ToastCompoment
