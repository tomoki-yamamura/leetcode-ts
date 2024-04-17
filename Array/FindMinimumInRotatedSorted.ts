function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  let res = Infinity

  while (left <= right) {
    
    const mid = left + Math.floor((right - left)/2)
    if (nums[mid] > nums[nums.length -1]) {
      left = mid + 1
    } else {
      res = Math.min(res, nums[mid])
      right = mid - 1
    }
  }
  return res
}

const arry = [3,4,5,1,2];
console.log(findMin(arry));

// function sepFunc(nums: number[]): number[] {
//   const tmp = [...nums]
//   const length = nums.length;
//   const sepIndex = Math.floor(length / 2);
//   const left = tmp.splice(0, sepIndex+1);
//   const right = tmp.splice(-sepIndex);
//   const sepNum = nums[sepIndex];
//   if (left[sepIndex] <= sepNum && sepNum <= nums[sepIndex+1]) {
//     return left;
//   } else {
//     return right;
//   }
// }
