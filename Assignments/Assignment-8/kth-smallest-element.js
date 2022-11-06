// Javascript Code
/*  Time Complexity: O(N log N)
    Auxiliary Space: O(1) */
// Function to return K'th smallest element in a given array

function kthSmallest(arr, N, K) {
  // Sort the given array
  arr.sort((a, b) => a - b);

  // Return k'th element in the sorted array
  return arr[K - 1];
}

// Driver program to test above methods
let arr = [40, 25, 68, 79, 52, 66, 89, 97];
let N = arr.length,
  K = 2;
console.log(K + "'th smallest element is " + kthSmallest(arr, N, K));

// Output: 2'th smallest element is 40
