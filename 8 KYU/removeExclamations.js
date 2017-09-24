// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.

function remove(s) {
    return s.replace(/!/g, '') + '!'
  }

console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi!!!")) //"Hi!"
console.log(remove("!Hi")) // "Hi!"
console.log(remove("!Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!"
console.log(remove("Hi")) // "Hi!"