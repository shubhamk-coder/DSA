// Javascript Code
/*  Time Complexity: O(N log N)
    Auxiliary Space: O(1) */
// Function to return K'th largest element in a given array

function kthLargest(arr, N, K) {
  // Sort the given array
  arr.sort((a, b) => a - b);

  // Return k'th element in the sorted array
  return arr[N - K];
}

// Driver program to test above methods
let arr = [40, 25, 68, 79, 52, 66, 89, 97];
let N = arr.length,
  K = 2;
console.log(K + "'th largest element is " + kthLargest(arr, N, K));

// Output: 2'th largest element is 89
