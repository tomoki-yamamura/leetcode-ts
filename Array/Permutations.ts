function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  dfs(nums, [], Array(nums.length).fill(false), result);
  return result;
}

function dfs(nums: number[], path: number[], used: boolean[], result: number[][]): void  {
  for (let i = 0; i < nums.length; i++) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    if (used[i]) continue
    path.push(nums[i])
    used[i] = true
    dfs(nums, path, used, result)
    path.pop();
    used[i] = false
  }
}