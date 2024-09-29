export function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  const subSets: number[] = [];
  nums.sort((a, b) => a - b);
  function backtrack(idx: number) {
    if (idx >= nums.length) {
      result.push([...subSets]);
      return;
    }
    subSets.push(nums[idx]);
    backtrack(idx + 1);
    subSets.pop();
    while(idx+1 < nums.length && nums[idx] === nums[idx+1]) {
      idx++
    }
    backtrack(idx+1)
  }
  backtrack(0)
  return result
}

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
