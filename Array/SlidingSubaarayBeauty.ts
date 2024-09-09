export function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  const n = nums.length;
  const f = new Map();
  for(let R = -50; R < n; R++) {
    f.set(R, 0)
  }

  const result = []
  let L = 0;
  for(let R = 0; R < n; R++) {
    f.set(nums[R], f.get(nums[R] + 1))
    if (R < k - 1) continue
    let total = 0;
    for (let R2 = -50; R2 <= 50; R2++) {
      if (f.get(R2)) {
        total += f.get(R2)
        if (total >= x) {
          if (R2 < 0) {
            result.push(R2)
          } else {
            result.push(0)
          }
          break
        }
      }
    }
  }
  return result
}
