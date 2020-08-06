const urlEncode = require('./urlEncode')

test('replaces all spaces in a string with "%20"', () => {
  expect(urlEncode('test test')).toBe('test%20test')
  expect(urlEncode('test test test')).toBe('test%20test%20test')
  expect(urlEncode('testtesttest')).toBe('testtesttest')
})
