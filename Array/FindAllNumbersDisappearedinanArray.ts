export function findDisappearedNumbers(nums: number[]): number[] {
  const len = nums.length+1;
  const hashMap = new Array(len).fill(0)
  for (let i = 0; i < len - 1; i++) {
    hashMap[nums[i]] += 1
  }
  const result = hashMap.filter((v, i) => {
    if (v === 0 && i !== 0) {
      return i
    }
  })

  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
