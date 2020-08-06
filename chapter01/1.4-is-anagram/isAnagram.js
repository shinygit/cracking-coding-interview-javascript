const isAnagram = (string1, string2) => {
  const sorted1 = string1.split('').sort()
  const sorted2 = string2.split('').sort()

  if (sorted1.join() === sorted2.join()) return true
  return false
}

console.log(isAnagram('aba', 'aab'), true)
console.log(isAnagram('aba', 'aaba'), false)
console.log(isAnagram('aba', 'aa'), false)
console.log(isAnagram('aaa', 'bbb'), false)
