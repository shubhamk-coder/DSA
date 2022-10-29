/* 1. Compute and return the square root of x, where x is guaranteed to be a non-negative
integer. And since the return type is an integer, the decimal digits are truncated and only
the integer part of the result is returned. Also, talk about the time complexity of your
code.
Test Cases:
Input: 4
Output: 2
Input: 8
Output: 2
Explanation: The square root of 8 is 2.8284…., the decimal part is truncated and 2 is
returned.
Hint: Try to use a modified binary search approach for an optimized solution */

// Solution:
// Using Division to avoid overflow
// Time Complexity: O(logN)

var mySqrt = function (x) {
  if (x <= 1) {
    if (x == 1) {
      return 1;
    } else {
      return 0;
    }
  }
  let l = 1,
    r = x / 2;
  while (l < r) {
    let mid = Math.trunc(l + (r - l) / 2 + 1);
    let div = x / mid;
    if (div == mid) {
      return mid;
    } else if (div > mid) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

console.log(mySqrt(4));
console.log(mySqrt(8));

// Output: 2
// Output: 4
