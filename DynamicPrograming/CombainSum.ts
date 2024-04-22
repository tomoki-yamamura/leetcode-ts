function combinationSum4(nums: number[], target: number): number {
  const memo: { [key in number]: number } = {};
  const dp = (target: number): number => {
    if (target < 0) return 0;
    if (target === 0) return 1;

    if (memo[target] !== undefined) return memo[target];

    let distinctWays = 0;
    for (const num of nums) {
      distinctWays += dp(target - num);
    }
    return (memo[target] = distinctWays);
  };
  return dp(target);
}

export default combinationSum4

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
