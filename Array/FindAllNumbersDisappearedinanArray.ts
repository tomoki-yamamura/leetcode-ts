export function findDisappearedNumbers(nums: number[]): number[] {
  const len = nums.length+1;
  const hashMap = new Array(len).fill(0)
  const result = []
  for (let i = 0; i < len - 1; i++) {
    hashMap[nums[i]] += 1
  }
  for (let i = 0; i < hashMap.length; i++) {
    if (i !== 0 && hashMap[i] === 0) {
      result.push(i)
    }
  }

  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
