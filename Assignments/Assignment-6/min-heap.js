// Javascript code
// Time Complexity: O(N)
// Space Complexity: O(N)

const heapify = (arr, N, i) => {
  let smallest = i; // Initialize smallest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is smaller than root
  if (l < N && arr[l] < arr[smallest]) smallest = l;

  // If right child is smaller than smallest so far
  if (r < N && arr[r] < arr[smallest]) smallest = r;

  // If smallest is not root
  if (smallest != i) {
    let swap = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, N, smallest);
  }
};

const buildHeap = (arr) => {
  let N = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);
};

const printArray = (arr) => {
  let N = arr.length;
  for (let i = 0; i < N; ++i) console.log(arr[i] + " ");
};

// Driver's code
let arr = [1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27];
let N = arr.length;

// Function call
buildHeap(arr);

console.log("Array representation of Min-Heap is: ");
printArray(arr, N);

// Output :
/* Array representation of Min-Heap is: 
1 
3 
7 
9 
12 
10 
8 
16 
18 
22 
27  */
