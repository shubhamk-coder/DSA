// Javascript Code
/*  Time Complexity: O(N)
    Auxiliary Space: O(N) */

function majorityElement(nums) {
  let obj = {};

  let maxElement = 0;
  let majority;

  for (let n of nums) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }

    if (obj[n] > maxElement) {
      maxElement = obj[n];
      majority = n;
    }
  }
  console.log(majority);
}

// Driver Code
let x = [2, 2, 1, 1, 1, 2, 2];
majorityElement(x);
// Output: 2
