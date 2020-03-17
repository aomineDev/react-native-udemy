import validateEmail from './validateEmail'

export function validateAuthFields (email, password, repeatPassword = true) {
  const validations = {
    fields: {
      isValid: true,
      message: 'Todos los campos son obligatorios'
    },
    email: {
      isValid: true,
      message: 'El email no es correcto'
    },
    password: {
      isValid: true,
      message: 'Las contraseñas no coinciden'
    }
  }

  if (!email || !password || !repeatPassword) validations.fields.isValid = false

  validations.email.isValid = validateEmail(email)

  if ((password !== repeatPassword) && (repeatPassword !== true)) validations.password.isValid = false

  return validations
}

export function validateEditDisplayName (newDisplayName, displayName) {
  const validations = {
    isValid: true,
    message: null
  }

  if (!newDisplayName) {
    validations.isValid = false
    validations.message = 'El nombre de usuario no puede estar vacio'
  }

  if (newDisplayName === displayName) {
    validations.isValid = false
    validations.message = 'El nombre de usuario no ha cambiado'
  }

  return validations
}

export function validateEditEmail (newEmail, email) {
  const validations = {
    isValid: true,
    message: 'El email no es correcto'
  }

  validations.isValid = validateEmail(newEmail)

  if (!newEmail) {
    validations.isValid = false
    validations.message = 'El email no puede estar vacio'
  }

  if (newEmail === email) {
    validations.isValid = false
    validations.message = 'El email no ha cambiado'
  }

  return validations
}

export function validateEditPassword (password, newPassword = true, repeatNewPassword = true) {
  const validations = {
    isValid: true,
    fields: [],
    message: null
  }

  if (!password) {
    validations.isValid = false
    validations.fields = ['password']
    validations.message = 'La contraseña es requerida'
    return validations
  }

  if (newPassword === true) return validations

  if (!newPassword) {
    validations.isValid = false
    validations.fields = ['newPassword']
    validations.message = 'La nueva contraseña es requerida'
    return validations
  }

  if (!repeatNewPassword) {
    validations.isValid = false
    validations.fields = ['repeatNewPassword']
    validations.message = 'La nueva contraseña es requerida'
    return validations
  }

  if (newPassword !== repeatNewPassword) {
    validations.isValid = false
    validations.fields = ['newPassword', 'repeatNewPassword']
    validations.message = 'Las contraseñas no coinciden'
  }

  return validations
}
