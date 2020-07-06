export function formatDate (unformattedDate) {
  const date = new Date(unformattedDate.seconds * 1000)
  let day = date.getDate()
  day = addPrefix(day)
  let month = date.getMonth() + 1
  month = addPrefix(month)
  const year = date.getFullYear()
  let hour = date.getHours()
  const ampm = hour > 12 ? 'pm' : 'am'
  hour = formatHour(hour)
  let minute = date.getMinutes()
  minute = addPrefix(minute)

  return `${day}/${month}/${year} - ${hour}:${minute}${ampm}`
}

function addPrefix (number) {
  const prefix = number < 10 ? '0' : ''
  return prefix + number
}

function formatHour (hour) {
  let formattedHour = hour > 12 ? hour - 12 : hour

  formattedHour = addPrefix(formattedHour)
  return formattedHour
}
