// Given an array of integers, sort the array

// IDEA ---> Compare adjacent elements in the array and swap the position if they are not in the intended order
// ----> Repeat the instruction as you step through each element in the array
// ----> Once you step through the whole array with no swaps, the array is sorted

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // assign current element in a temp property
        let temp = arr[i];
        // swap current element and (i+1) element
        arr[i] = arr[i + 1];
        // assign temp element to (i+1) element
        arr[i + 1] = temp;
        // declare swapper to keep true for loop going
        swapped = true;
      }
    }
  } while (swapped);
}

// Big-0 = O(n²)

const arr = [8, 20, -2, 4, -6];

bubbleSort(arr);
console.log(arr); // [-6,-2,4,8,20]
