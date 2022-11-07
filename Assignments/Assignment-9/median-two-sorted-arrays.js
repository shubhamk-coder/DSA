// Time Complexity: O(1)

const findMedianSortedArrays = (nums1, nums2) => {
  let nums = nums1.concat(nums2);
  let length = nums.length;

  nums.sort((a, b) => {
    return a - b;
  });

  if (length % 2 === 1) {
    return nums[(length - 1) / 2];
  }

  return (nums[length / 2 - 1] + nums[length / 2]) / 2;
};

// Driver code
let nums1 = [1, 2];
let nums2 = [3, 4];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);
