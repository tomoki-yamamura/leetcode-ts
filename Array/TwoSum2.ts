function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while(left < right) {
    const total = numbers[left] + numbers[right]
    if (target === total) break
    if (target > total) {
      left++
    } else {
      right--
    }
  }
  return [left+1, right+1]
};