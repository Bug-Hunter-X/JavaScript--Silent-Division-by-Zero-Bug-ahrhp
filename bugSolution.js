function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error("Division by zero");
    //Or return a specific value such as null, NaN, or a default value.
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, 2)); // Returns 5