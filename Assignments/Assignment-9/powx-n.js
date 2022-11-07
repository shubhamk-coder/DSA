// Javascript Code
// T
const binaryPow = (num, power) => {
  if (num === 0) return 0;
  if (power === 0) return 1;
  if (power === 1) return num;

  const halfPower = Math.floor(power / 2);
  const halfRes = binaryPow(num, halfPower);
  const res = halfRes * halfRes;

  return power % 2 === 0 ? res : res * num;
};

const myPow = (x, n) => {
  const res = binaryPow(x, Math.abs(n));

  return n < 0 ? 1 / res : res;
};

// Driver code
let x = 2.0;
let n = -2;
let result = myPow(x, n);
console.log(result);

// Output: 0.25
