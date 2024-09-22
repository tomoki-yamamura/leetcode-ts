function findGCD(nums: number[]): number {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  return gcd(max, min)
};

function gcd(a: number, b: number): number {
  if(b === 0) {
    return a
  }
  return gcd(b, a % b)
}