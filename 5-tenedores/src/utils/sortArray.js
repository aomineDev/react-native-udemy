export function sortArrayAsc (value) {
  return function (a, b) {
    return a[value] < b[value] ? -1 : (a[value] > b[value] ? 1 : 0)
  }
}

export function sortArrayDesc (value) {
  return function (a, b) {
    return a[value] > b[value] ? -1 : (a[value] > b[value] ? 1 : 0)
  }
}
