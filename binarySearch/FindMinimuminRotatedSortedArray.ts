export function findMin(nums: number[]): number {
  let left: number = 0
  let right: number = nums.length - 1
  let res: number = Infinity
  while(left <= right) {
    const mid = left + Math.floor((right-left)/2)
    if (nums[mid] > nums[nums.length-1]) {
      left = mid + 1
    } else {
      res = Math.min(res, nums[mid])
      right = mid - 1
    }
  }
  return res
};