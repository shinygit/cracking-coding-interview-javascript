const everyCharUnique = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false
      }
    }
  }
  return true
}
console.log(everyCharUnique('abcd'), 'true')
console.log(everyCharUnique('abccd'), 'false')
console.log(everyCharUnique('bhjjb'), 'false')
console.log(everyCharUnique('mdjq'), 'true')
console.log(everyCharUnique('abcdefghijklmnopqrstuvwxyz'), 'true')
console.log(everyCharUnique('abcdefghijklmnopqrstuvwxyza'), 'false')

const everyCharUnique2 = (string) => {
  const map = {}
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 1) return false
    map[string[i]] = 1
  }
  return true
}

console.log(everyCharUnique2('abcd'), 'true')
console.log(everyCharUnique2('abccd'), 'false')
console.log(everyCharUnique2('bhjjb'), 'false')
console.log(everyCharUnique2('mdjq'), 'true')
console.log(everyCharUnique2('abcdefghijklmnopqrstuvwxyz'), 'true')
console.log(everyCharUnique2('abcdefghijklmnopqrstuvwxyza'), 'false')
