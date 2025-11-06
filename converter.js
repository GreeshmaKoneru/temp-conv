// converter.js
function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function toKelvin(celsius) {
  return celsius + 273.15;
}

// Output
console.log(toFahrenheit(25)); // Output: 77°F
console.log(toKelvin(25));     // 298.15K
