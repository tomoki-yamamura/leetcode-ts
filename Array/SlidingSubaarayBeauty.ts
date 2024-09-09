function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  const slice = nums.slice(0, k);
  const sortedSubaaray = slice.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const slice = nums.slice(i, k);
    const sortedSubaaray = slice.sort((a, b) => a - b);
    result.push(valueCalc(sortedSubaaray, x));
  }
  return result;
}

function valueCalc(subaaray: number[], x: number) {
  if (subaaray[0] >= 0) return 0;
  return subaaray[x - 1];
}
