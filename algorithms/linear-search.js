// Problem - Given an array of n elements and a target element t find the index of t in the arra. Return -1 if the target element
// is not found

// arr = [-5,2,10,4,6], t = 10 --> Should return 2

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Big-O = O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
