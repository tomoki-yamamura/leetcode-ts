export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let minLength = Infinity;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    if (sum >= target) {
      while (sum < target) {
        sum -= nums[right];
        right++;
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
