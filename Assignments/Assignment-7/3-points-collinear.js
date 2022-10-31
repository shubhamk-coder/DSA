// Javascript Code

/* Approach-1: Three points lie on the straight line if the area formed by the 
triangle of these three points is zero. So we will check if the area formed by
the triangle is zero or not.
Formula for area of triangle is : 
0.5 * [x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)] */
// Time Complexity: O(1)
// Space Complexity: O(1)

function collinear(x1, y1, x2, y2, x3, y3) {
  // Calculation the area of triangle. We have skipped multiplication with 0.5
  // to avoid floating point computations
  var a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);

  if (a == 0) console.log("Yes");
  else console.log("No");
}

// Driver Code
var x1 = 1,
  x2 = 1,
  x3 = 0,
  y1 = 1,
  y2 = 6,
  y3 = 9;
collinear(x1, y1, x2, y2, x3, y3);

// Output: No

var x1 = 1,
  x2 = 1,
  x3 = 1,
  y1 = 1,
  y2 = 4,
  y3 = 5;
collinear(x1, y1, x2, y2, x3, y3);

// Output: Yes

/* Approach-2: For three points, slope of any pair of points must be same as other pair.
For example, slope of line joining (x2, y2) and (x3, y3), and line joining 
(x1, y1) and (x2, y2) must be same.
(y3 - y2)/(x3 - x2) = (y2 - y1)/(x2 - x1)
In other words, 
(y3 - y2)(x2 - x1) = (y2 - y1)(x3 - x2)  */
// Time Complexity: O(1)
// Space Complexity: O(1)

function coollinear(x1, y1, x2, y2, x3, y3) {
  if ((y3 - y2) * (x2 - x1) == (y2 - y1) * (x3 - x2)) console.log("Yes");
  else console.log("No");
}

// Driver Code
var a1 = 1,
  a2 = 1,
  a3 = 0,
  b1 = 1,
  b2 = 6,
  b3 = 9;
coollinear(a1, b1, a2, b2, a3, b3);

// Output: No

var x1 = 1,
  x2 = 1,
  x3 = 1,
  y1 = 1,
  y2 = 4,
  y3 = 5;
coollinear(x1, y1, x2, y2, x3, y3);

// Output: Yes
