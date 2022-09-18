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
// Time Complexity: O(logn)

/* var mySqrt = function (x) {
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
 */
// Output: 2
// Output: 4

/* 2. You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check. Since each
version is developed based on the previous version, all the versions after a bad version
are also bad. Suppose you have n version and you want to find out the first bad one,
which causes all the following ones to be bad. Also, talk about the time complexity of
your code.
Test Cases:
Input: [0,0,0,1,1,1,1,1,1]
Output: 3
Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of
the first 1 is at 3. Thus, the output is 3 */

// Solution:
// Time Complexity: O(logn)

/* function version(arr) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    mid = l + Math.trunc((r - l) / 2);
    if (arr[mid] == 1) {
      if (arr[mid - 1] == 0) {
        return mid;
      } else {
        r = mid - 1;
      }
    } else {
      l = mid + 1;
    }
  }
}

arr1 = [0, 0, 0, 1, 1, 1, 1, 1, 1];
console.log(version(arr1));
 */
// Output: 3

/* 3. Given a positive integer num, write a program that returns True if num is a perfect
square else return False. Do not use built-in functions like sqrt. Also, talk about the time
complexity of your code.
Test Cases:
Input: 16
Output: True
Input: 14
Output: False */

// Solution:
