function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Or throw an error: throw new Error('Both inputs cannot be null');
  } else if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Add the numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: 0 //Explicitly handles both null case