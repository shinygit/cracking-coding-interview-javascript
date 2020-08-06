const urlEncode = (string) => {
  return string.split(' ').join('%20')
}

module.exports = urlEncode
