function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, currentSet: number[]): void {
    result.push([...currentSet]);
    for(let i = 0; i < nums.length; i++) {
      currentSet.push(nums[i]);
      backtrack(i+1, currentSet);
      currentSet.pop();
    }
  }

  backtrack(0, []);
  return result
};