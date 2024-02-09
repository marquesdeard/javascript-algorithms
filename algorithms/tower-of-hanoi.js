// The objective of the puzzle is to move the entire stack to the last rod, obeying following rules:
// - Only one disk  may be moved at a time
// - Each move consist of taking the upper disk from one of the stack and placing it on top of another stack or on an empty rod
// - No disk may be replaced on top of a dist that is smaller

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// Big-O = O(2^n)

towerOfHanoi(3, "A", "C", "B");
