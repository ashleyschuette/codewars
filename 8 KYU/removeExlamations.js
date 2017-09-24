// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.

function remove(s) {
    for (var i = 0; i < s.length; i++);
    if (i === '!') {
        remove.splice(i)
    }
  }

console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi!!!")) //"Hi!"
console.log(remove("!Hi")) // "Hi!"
console.log(remove("!Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!"
console.log(remove("Hi")) // "Hi!"