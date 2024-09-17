function buildArray(nums: number[]): number[] {
  const result = []
  for(let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]])
  }
  return result
};
