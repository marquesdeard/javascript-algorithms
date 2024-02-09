function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  console.log(n & (n - 1));

  return (n & (n - 1)) === 0;
}

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
// 1 - 0001
// 2 - 0010
// 4 - 0100
// 8 - 1000

// 5 - 0101
// --> (n-1) 5-1 = 4 - 0100
// ---> 0101
// ---> 0100
// ---> 0100 ---> 	Sets each bit to 1 if both bits are 1
// ---> 4 result

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(3)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// Big-O = O(logn)
