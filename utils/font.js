/**
 * @param {name} string Get font name as string
 * @param {{weight}} object Get all font weight
 */

function getGoogleFont({ name, weight = 400 }) {
  if (weight === 400) {
    return `<link href="https://fonts.googleapis.com/css?family=${name}" rel="stylesheet" />`
  } else {
    return `<link href="https://fonts.googleapis.com/css?family=${name}:${weight}" rel="stylesheet" />`
  }
}

console.log(getGoogleFont({ name: 'Montserrat', weight: '300,600' }))
