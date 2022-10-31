// Javascript code
/* Time Complexity: O(n log n). 
   Time complexity to find the distance from the origin for every point is O(n) and to sort the array is O(n log n)
   Space Complexity: O(n). 
   As we are making an array to store distance from the origin for each point. */

// Function to print required answer
function pClosest(pts, k) {
  let n = pts.length;
  let distance = new Array(n);
  for (let i = 0; i < n; i++) {
    let x = pts[i][0],
      y = pts[i][1];
    distance[i] = x * x + y * y;
  }

  distance.sort(function (a, b) {
    return a - b;
  });

  // Find the k-th distance
  let distk = distance[k - 1];

  // Print all distances which are smaller than k-th distance
  for (let i = 0; i < n; i++) {
    let x = pts[i][0],
      y = pts[i][1];
    let dist = x * x + y * y;

    if (dist <= distk) console.log("[" + x + ", " + y + "] ");
  }
}

// Driver code
let points = [
  [1, 3],
  [-2, 2],
];
let K = 1;
pClosest(points, K);

// Output:
// [-2, 2]
