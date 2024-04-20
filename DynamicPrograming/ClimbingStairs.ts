const cache: number[] = []
function climbStairs(n: number): number {
  if (n <= 2) return n
  if(!cache[n]) {
    cache[n] = climbStairs(n-1) + climbStairs(n-2)
  } 
  return cache[n]
};

console.log(climbStairs(5));

