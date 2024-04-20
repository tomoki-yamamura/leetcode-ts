function threeSum(nums: number[]): number[][] {

  nums.sort((a, b) => a - b); // sort the input array
  const result: number[][] = []; // initialize the result array

  for (let i = 0; i < nums.length - 2; i++) { // iterate through the array
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let j = i + 1; // initialize the left pointer
    let k = nums.length - 1; // initialize the right pointer

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) { // check if we found a triplet that sums to zero
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
        while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
        j++; // move the left pointer to the right
        k--; // move the right pointer to the left
      } else if (sum < 0) { // if the sum is less than zero, move the left pointer to the right
        j++;
      } else { // if the sum is greater than zero, move the right pointer to the left
        k--;
      }
    }
  }

  return result; // return the result array
}

const a = [-1,-1,-1, -1, 2,2]

const result = threeSum(a)
console.log(result);


// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.