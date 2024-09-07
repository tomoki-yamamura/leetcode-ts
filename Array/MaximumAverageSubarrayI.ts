export function findMaxAverage(nums: number[], k: number): number {
  let tmpSum = nums.slice(0, k).reduce((a, b) => a + b, 0)
  let result = tmpSum/k
  for(let i = k; i < nums.length; i++) {
    const leftPoint = i-k
    const newSum = tmpSum-nums[leftPoint]+nums[i]
    const tmpResu = newSum/k
    if (newSum > tmpSum && tmpResu > result) result =  tmpResu
    tmpSum = newSum
  }
  return result
};
