import * as firebase from 'firebase/app'

export async function updateAvatar (updateData) {
  try {
    await firebase
      .auth()
      .currentUser
      .updateProfile(updateData)

    return 'Avatar actualizado'
  } catch (error) {
    return new Error('Ocurrio un error, intentelo más tarde')
  }
}

export async function updateDisplayName (displayName) {
  try {
    await firebase
      .auth()
      .currentUser
      .updateProfile(displayName)

    return 'Nombre de usuario actualizado'
  } catch (error) {
    return new Error('Ocurrio un error, intentelo más tarde')
  }
}

export async function updateEmail (email) {
  try {
    await firebase
      .auth()
      .currentUser
      .updateEmail(email)

    return 'Email actualizado'
  } catch (error) {
    return new Error('Ocurrio un error, intentelo más tarde')
  }
}

export async function updatePassword (password) {
  try {
    await firebase
      .auth()
      .currentUser
      .updatePassword(password)
    return 'Contraseña actualizada'
  } catch (error) {
    return new Error('Ocurrio un error, intentelo más tarde')
  }
}
