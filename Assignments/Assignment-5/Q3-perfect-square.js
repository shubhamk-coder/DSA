/* 3. Given a positive integer num, write a program that returns True if num is a perfect
square else return False. Do not use built-in functions like sqrt. Also, talk about the time
complexity of your code.
Test Cases:
Input: 16
Output: True
Input: 14
Output: False */

// Solution:
// Time Complexity: O(logN)
function checkPerfectSquare(N, start, last) {
  let mid = parseInt((start + last) / 2);

  if (start > last) {
    return false;
  } else if (mid * mid == N) {
    return true;
  } else if (mid * mid > N) {
    return checkPerfectSquare(N, start, mid - 1);
  } else {
    return checkPerfectSquare(N, mid + 1, last);
  }
}

let m = 25;
let n = 35;
let s = 1;
console.log(checkPerfectSquare(m, s, m));
//Output: true
console.log(checkPerfectSquare(n, s, n));
//Output: false
