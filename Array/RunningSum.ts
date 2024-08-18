function runningSum(nums: number[]): number[] {
  let tmp = nums[0]
  return nums.map((v, i) => {
    if (i === 0) return tmp
    tmp = v + tmp
    return tmp
  })
};