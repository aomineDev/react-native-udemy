import { Animated, Easing } from 'react-native'

export const transitionScreen = () => {
  return {
    transitionSpec: {
      duration: 500,
      timing: Animated.timing,
      easing: Easing.out(Easing.poly(4))
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      })

      return { transform: [{ translateX }] }
    }
  }
}
