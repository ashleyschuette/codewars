function typeValidation(variable, type) {
    if (typeof variable == type) {
      return true
  } else {
      return false
    }
}

console.log(typeValidation(42, "number")) // true
console.log(typeValidation("42", "number")) // false