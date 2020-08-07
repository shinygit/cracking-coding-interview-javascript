const rotateImage = require('./rotateImage')

test('rotates even matrix 90 degrees', () => {
  expect(
    rotateImage([
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
  ).toStrictEqual([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ])
})
test('rotates odd matrix 90 degrees', () => {
  expect(
    rotateImage([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ])
  ).toStrictEqual([
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ])
})

test('rotates small matrix 90 degrees', () => {
  expect(
    rotateImage([
      [1, 2],
      [6, 7],
    ])
  ).toStrictEqual([
    [6, 1],
    [7, 2],
  ])
})

test('rotates single item matrix 90 degrees', () => {
  expect(rotateImage([[1]])).toStrictEqual([[1]])
})
