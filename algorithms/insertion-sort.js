// Virtially split the array into a sorted and unsorted part
// Assume that the first element is already sorted and remain elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part
// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.
// Else, shift larger elements in the sorted part towards the right
// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // asign current index element to a constant for usage
    const element = arr[i];

    // take previous index of current element
    let j = i - 1;

    // Declare a while loop for sorted part of array
    while (j >= 0 && arr[j] > element) {
      // Assign previous element to current element
      arr[i] = arr[j];
      // Descending to j element one more
      j -= 1;
    }

    // After while loop in sorted part of array assign element to
    // We use j here because we did descending j above
    arr[j + 1] = element;
  }
}

// Big-0 = O(n²)


const arr = [-6, 20, 9, 3, 5];
insertionSort(arr);
console.log(arr); // [-6,2,5,7,20]
