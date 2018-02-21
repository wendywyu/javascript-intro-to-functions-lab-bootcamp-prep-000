function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log.restore()
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log()
}

function sayHiToGrandma(string) {
  return string.toEqual()
}
