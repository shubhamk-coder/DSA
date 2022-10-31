// Javascript Code
/*  Time complexity: O(N3). 
    Three nested loops are traversing in the array, so time complexity is O(n^3).
    Space Complexity: O(1). 
    As no extra space is required. */

// Function to return the sum of a triplet which is closest to x
function solution(arr, x) {
  // To store the closest sum
  let closestSum = Number.MAX_VALUE;

  // Run three nested loops each loop
  // for each element of triplet
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        // Update the closestSum
        if (Math.abs(x - closestSum) > Math.abs(x - (arr[i] + arr[j] + arr[k])))
          closestSum = arr[i] + arr[j] + arr[k];
      }
    }
  }

  // Return the closest sum found
  return closestSum;
}

// Driver code
let arr = [-1, 2, 1, -4];
let x = 1;

console.log(solution(arr, x));

// Output: 2
