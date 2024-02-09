// A prime number is a natural number greater than 1 that is not a product of two natural numbers

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1), 1); // False
console.log(isPrime(5), 5); // True
console.log(isPrime(4), 4); // False

// Big-O = O(sqrt(n))
