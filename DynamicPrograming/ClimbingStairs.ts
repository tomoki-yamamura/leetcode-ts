// const cache: number[] = []
// function climbStairs(n: number): number {
//   if (n <= 2) return n
//   if(!cache[n]) {
//     cache[n] = climbStairs(n-1) + climbStairs(n-2)
//   }
//   return cache[n]
// };

// console.log(climbStairs(5));

const memo: Record<number, number> = {};
function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n in memo) return memo[n];
  return (memo[n] = climbStairs(n-1) + climbStairs(n-2))
}

export default climbStairs
