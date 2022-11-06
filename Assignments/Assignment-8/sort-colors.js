// Javascript Code
// Time Complexity: O(N)
// Space Complexity: O(1)

// Sort colors function to sort colors
const sortColors = (nums) => {
  let twoI = nums.length - 1;
  let zeroI = 0;
  for (let i = 0; i <= twoI; i++) {
    if (nums[i] == 0) {
      [nums[i], nums[zeroI]] = [nums[zeroI], nums[i]];
      zeroI++;
    } else if (nums[i] == 2) {
      [nums[i], nums[twoI]] = [nums[twoI], nums[i]];
      twoI--;
      i--;
    }
  }
  return nums;
};

// Driver Code
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));

// Output: [ 0, 0, 1, 1, 2, 2 ]
