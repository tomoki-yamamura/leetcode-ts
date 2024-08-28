export function subarraysDivByK(nums: number[], k: number): number {
  const map: Map<number, number> = new Map()
  let total = 0
  let result = 0
  // 初期値として reminder が 0 の場合に対応するため
  map.set(0, 1)
  for (const num of nums) {
    total += num
    let reminder = total % k
    // JavaScript の % は負の値を返すことがあるので調整
    if (reminder < 0) {
      reminder += k
    }
    if (map.has(reminder)) {
      result += map.get(reminder)!
      map.set(reminder, map.get(reminder)! + 1)
    } else {
      map.set(reminder, 1)
    }
  }

  return result
};

const resu = subarraysDivByK([4,5,0,-2,-3,1], 5)
console.log(resu);

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0
