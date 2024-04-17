function maxProduct(nums: number[]): number {
  let highest = nums[0]
  let tmpHighest = highest
  let tmpLowest = highest
  for(let i = 1; i < nums.length; i++) {
    const candidateOne = tmpHighest*nums[i]
    const candidateTwo = tmpLowest*nums[i]
    tmpHighest = Math.max(candidateOne, nums[i], candidateTwo)
    tmpLowest = Math.min(candidateOne, nums[i], candidateTwo)
    highest = Math.max(tmpHighest, highest)
  }
  return highest
};

const arg =  [2,-5,-2,-4,3]

console.log(maxProduct(arg));




// function maxProduct(nums: number[]): number {
//   let highest = nums[0]
//   let lowestSoFar = highest
//   let highestSoFar = highest

//   for (let i = 1; i < nums.length; i++) {
//       const num = nums[i]
//       const candidateOne = lowestSoFar * num
//       const candidateTwo = highestSoFar * num

//       highestSoFar = Math.max(num, candidateOne, candidateTwo)
//       lowestSoFar = Math.min(num, candidateOne, candidateTwo)

//       highest = Math.max(highestSoFar, highest)
//   }

//   return highest
// };
