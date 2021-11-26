const hexColor = {
  '#': '#',
  0: 'f',
  1: 'e',
  2: 'd',
  3: 'c',
  4: 'b',
  5: 'a',
  6: '9',
  7: '8',
  8: '7',
  9: '6',
  a: '5',
  b: '4',
  c: '3',
  d: '2',
  e: '1',
  f: '0'
}

export function negativeColor (color) {
  const lowerColor = color.toLowerCase()
  const arrColor = lowerColor.split('')
  const arrNegative = arrColor.map(item => hexColor[item])
  return arrNegative.join('')
}

export function getColor (color) {
  const result = parseInt(color.slice(1), 16)

  return result > 0xffffff / 2 ? '#000000' : '#ffffff'
}
