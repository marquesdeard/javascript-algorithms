// Problem - Given a sorted array of n elements and a target element t, find the index of t in the array
// Return -1 if the target element is not found

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    // Take middle point of arr
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    // if middle index of array is equal to target return target
    if (target === arr[midIndex]) {
      return midIndex;
    }

    // if target lower than middle point of array, set right index -1 point of middle index
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      // if target higher than middle index this time set leftindex to middle index + 1
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}

//Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
