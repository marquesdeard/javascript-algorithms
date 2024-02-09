// (n = 4)
function summation(n) {
  let sum = 0; // -----> 1 time
  for (let i = 1; i <= n; i++) {
    sum += i; // ----> n time
  }
  return sum; // ----> 1 time
}

// Time Complexity O(n) ---> Linear for this function

// Actualy we has O(n+2) but +2 part is would be unnecessary when input size is bigger for this we rid of +2 part of out input size
// It is not affect for bigger numbers

/*-----------------------------*/

// O(1) - which is Constant Time Complexity, it is not respective of what the value of n is
function summation(n) {
  return (n * (n + 1)) / 2; // ----> This line executed only once
}

/*-----------------------------*/

// O(n²) Time Complexity is Quadratic

// For example we have (3n² + 5n + 1) and we narrow down constant n values and we get n² ---> O(n²)
function twoNestedLoops(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // Some Code
    }
  }
}

/*-----------------------------*/

// O(n³) Time Complexity is Cubic

// For example we have (3n³ + 5n + 1) and we narrow down constant n values and we get n³ ---> O(n³)
function twoNestedLoops(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        // Some Code
      }
    }
  }
}

/*-----------------------------*/
