function getAverages(nums: number[], k: number): number[] {
  let sum = 0;
  for(let i = 0; i<nums.length; i++) {
    if(i <= k && k <= nums.length-i) {
      
    } else {
      sum += nums[i]
      nums[i] = -1
    }
  }
};


// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]