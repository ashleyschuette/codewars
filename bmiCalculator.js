// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    var bmiC = (weight / Math.pow(height, 2));
    if (bmiC <= 18.5) {
        return "Underweight"
    } else if (bmiC <= 25.0 ) {
        return "Normal"
    } else if (bmiC <= 30.0) {
        return "Overweight"
    } else if (bmiC > 30) {
        return "Obese"
    } 
}

console.log((bmi(80, 1.80))) // "Normal"