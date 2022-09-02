// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined 
// and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned
//  above to help convert the Celsius temperature to Fahrenheit.

// starting function
// function convertCtoF(celsius) {
//     let fahrenheit = celsius(9/5) +32 ;
//     return fahrenheit;
//   }
  
//   convertCtoF(30);

function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32
    // fahrenheit(9/5+32) ;
    // console.log(fahrenheit)
    return fahrenheit;
  }
  
  console.log(convertCtoF(0));
  console.log(convertCtoF(-22));
  console.log(convertCtoF(30));
  console.log(convertCtoF(14));
  console.log(convertCtoF(86));