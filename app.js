// console.log("this is active")

// Exercise 1: maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
// // Exercise 2
const isAdult = (x) => {
    if (x >= 18) {
      return "Adult";
    } else {
      return "Minor"
    }
}

console.log("Exercise 2 Result:", isAdult(13))

// // Exercise 3
const isCharAVowel = (x) => {
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u")
    { return "True"
      }
      else {
      return "False"
    }
}

console.log("Exercise 3 Result:", isCharAVowel("a"))

// // Exercise 4
const generateEmail = (name, domain) => {
  return `${name}${domain}`
}

console.log("Exercise 4 Result:", generateEmail("cobajayy","@gmail.com"))

// // // Exercise 5
const greetUser = (name, timeOfDay) => {
    if (timeOfDay === "Morning" || timeOfDay === "Afternoon" || timeOfDay === "Evening")
      return `${name}, ${timeOfDay}`
}

console.log("Exercise 5 Result:", greetUser("Coba", "Evening"))

// // Exercise 6
const maxOfThree = (x, y, z) => {
    if(x >= y && x >= z) {
      return x
    } 
      else if(y >= z) {
      return y
    } 

      else {
      return z
    }
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8))

// // Exercise 7
const calculateTip = (billAmount, tipPercentage) => {
  return "$" + (billAmount * tipPercentage / 100)
}

console.log("Exercise 7 Result:", calculateTip(150, 20))

// // Exercise 8
const convertTemperature = (temperature, scale) => {
  if (scale === "c" || scale === "C" || scale === "celsius" || scale === "Celsius")  {
    return (temperature * 9/5 + 32) + " Fahrenheit"
  } 
  
  else if (scale === "f" || scale === "F" || scale === "fahrenheit" || scale === "Fahrenheit") {
    return (temperature - 32 * 5/9) + " Celsius"
  }
}

console.log("Exercise 8 Result:", convertTemperature(50, "c"))

// // Exercise 9
const basicCalculator = (x, y, operation) => {
  if(operation === "add") {
    return x + y
  }
  else if(operation === "subtract") {
    return x - y
  }
  else if(operation === "multiply") {
    return x * y
  }
  else(operation === "divide")
    return x / y
}

console.log("Exercise 9 Result:", basicCalculator(10, 4, "divide"))