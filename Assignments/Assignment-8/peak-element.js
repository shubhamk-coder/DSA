// Javascript Code
/*  Time Complexity: O(N)
    Auxiliary Space: O(1) */

let findPeakElement = function (a) {
  let low = 0;
  let high = a.length - 1;

  while (low < high) {
    //for every array there should be atleast one peak exists

    let mid = Math.floor((low + high) / 2);

    if (a[mid] < a[mid + 1]) {
      low = mid + 1;
    } else if (a[mid] > a[mid + 1]) {
      high = mid;
    }
  }

  return low;
};

// Driver Code
let a = [1, 2, 3, 1];
console.log(findPeakElement(a));
// Output: 2
