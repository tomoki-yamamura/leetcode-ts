function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a,b ) => a -b)
  const subSets: number[] = []
  function backtrack(start: number) {
    result.push([...subSets])
    for (let i = 0; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i-1]) continue
      subSets.push(nums[i])
      backtrack(i+1)
      subSets.pop()
    }
  }
  backtrack(0)
  return result
};

// export function permute(nums: number[]): number[][] {
//   const result: number[][] = [];
//   dfs(nums, [], Array(nums.length).fill(false), result);
//   return result;
// }

// function dfs(nums: number[], path: number[], used: boolean[], result: number[][]): void  {
//   for (let i = 0; i < nums.length; i++) {
//     if (path.length === nums.length) {
//       result.push([...path])
//       return
//     }
//     if (used[i]) continue
//     path.push(nums[i])
//     used[i] = true
//     dfs(nums, path, used, result)
//     path.pop();
//     used[i] = false
//   }
// }

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]