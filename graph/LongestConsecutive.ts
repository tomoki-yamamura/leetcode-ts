function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let max = 0;

  for(const num of nums) {
    if(set.has(num + 1)) continue;
    let counter = 1
    let current = num
    while (set.has(--current)) {
      counter++
      // current--
    }
    max = Math.max(max, counter)
  }
  
    return max
};

const resul = longestConsecutive([100,4,200,1,3,2])
console.log(resul);

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9