// EXAMPLE
// Not Jaden- Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () { 
    return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
  };
  
  
  var str = "How can mirrors be real if our eyes aren't real";
  console.log(str.toJadenCase())
