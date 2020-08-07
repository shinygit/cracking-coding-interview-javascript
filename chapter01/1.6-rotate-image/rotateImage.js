const rotateImage = (matrix) => {
  let n = matrix.length - 1
  let layers = Math.floor(matrix.length / 2)
  let temp

  for (let i = 0; i < layers; i++) {
    for (let j = i; j < n - i; j++) {
      temp = matrix[i][j]
      matrix[i][j] = matrix[n - j][i]
      matrix[n - j][i] = matrix[n - i][n - j]
      matrix[n - i][n - j] = matrix[j][n - i]
      matrix[j][n - i] = temp
    }
  }
  return matrix
}

const rotateImage2 = (matrix) => {
  const l = matrix.length - 1
  return matrix.map((vi, ii) => {
    return vi.map((vj, ij) => {
      return matrix[l - ij][ii]
    })
  })
}

module.exports = rotateImage

const blah = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
