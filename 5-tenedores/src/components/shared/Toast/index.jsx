import React from 'react'
import ToastCompoment from 'react-native-easy-toast'

const Toast = ({ toastRef, position }) => (
  <ToastCompoment
    ref={toastRef}
    style={{ borderRadius: 50 }}
    position={position}
    opacity={0.75}
  />
)

export default Toast
