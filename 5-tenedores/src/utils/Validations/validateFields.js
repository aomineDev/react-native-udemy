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

export function validateEditDisplayName () {

}
