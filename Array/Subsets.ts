export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];

  function createSubset(i: number): void {
    if(i === nums.length) {
      result.push([...subset])
      return
    }

    subset.push(nums[i])
    createSubset(i+1);

    subset.pop();
    createSubset(i+1)
  }

  createSubset(0);
  return result
};