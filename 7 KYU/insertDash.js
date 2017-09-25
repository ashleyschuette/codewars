// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
    var numString = [];
    var digits = num.toString().split('');
    for (i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 1 && digits[i + 1] % 2 === 1) {
            numString.push(digits[i] + '-');
        } else {
            numString.push(digits[i])
        }
    }
    return numString.join('')
}

console.log(insertDash(454793)) // '4547-9-3'
console.log(insertDash(123456)) // '123456'
console.log(insertDash(1003567)) // '1003-567'