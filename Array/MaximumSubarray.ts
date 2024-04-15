function maxSubArray(nums: number[]): number {
  let tmp = nums[0]
  let currMax = nums[0]
    for(let i = 1; i < nums.length; i++) {
      tmp = Math.max(nums[i], nums[i]+tmp)
      currMax = Math.max(tmp, currMax)
    }
    return currMax
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
