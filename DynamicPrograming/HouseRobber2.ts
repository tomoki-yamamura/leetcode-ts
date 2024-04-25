function rob2(nums: number[]): number {
  if(nums.length === 1) {
    return nums[0]
  }
  const nums1 = nums.slice(0, nums.length-1)
  const nums2 = nums.slice(1, nums.length)
  let rob1 = 0;
  let rob2 = 0;
  for(const num of nums1) {
    const tmp = Math.max(rob1+num, rob2)
    rob1 = rob2
    rob2 = tmp
  }
  const tmp1Max = rob2
  rob1 = 0;
  rob2 = 0;
  for(const num of nums2) {
    const tmp = Math.max(rob1+num, rob2)
    rob1 = rob2
    rob2 = tmp
  }
  return Math.max(tmp1Max, rob2)
};

console.log(rob2([2,3,2]));
// function rob(nums: number[]): number {
//   if(nums.length === 1) {
//     return nums[0]
//   }
//   if (nums.length === 2) {
//     return Math.max(nums[0], nums[1])
//   }

//   const result: number[] = new Array(nums.length).fill(0)
//   result[0] = nums[0]
//   result[1] = nums[1]
//   let tmpMax = 0;
//   for(let i = 2; i < nums.length; i++) {
//     result[i] = Math.max(result[i-2]+nums[i], result[i-1])
//     tmpMax = Math.max(tmpMax, result[i])
//   }
//   return tmpMax
// };

// console.log(rob([2,7,9,3,1]));
