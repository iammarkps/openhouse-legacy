/**
 * @param {name} string Get font name as string
 * @param {{weight}} object Get all font weight
 */

export function getGoogleFont({ name, weight = 400 }) {
  let uri = `https://fonts.googleapis.com/css?family=${name}`

  if (weight !== 400) {
    uri += `:${weight}`
  }

  return <link href={uri} rel="stylesheet" />
}
