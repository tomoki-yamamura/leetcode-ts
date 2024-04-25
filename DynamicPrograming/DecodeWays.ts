// function numDecodings(s: string): number {
//   let [next1, next2] = [1, 1];
//   for (let i = s.length - 1; i >= 0; --i) {
//     let result: number;
//     if (s[i] === "0") result = 0;
//     else {
//       result = next1;
//       if (i <= s.length - 2 && parseInt(s.substring(i, i + 2)) <= 26)
//         result += next2;
//     }
//     [next1, next2] = [result, next1];
//   }
//   return next1;
// }

// console.log(numDecodings("1203"));



function numDecodings(s: string): number {
  const len: number = s.length;

  const memo: Record<number, number> = {};

  const dp = (i: number): number => {
    if (i > len) return 0
    if (i === len) return 1
    if (s.charAt(i) === "0") return 0
    if (memo[i] !== undefined) {
      return memo[i]
    }
    if (parseInt(s.substring(i, i+2)) > 26) {
      const res = dp(i+1)
      memo[i] = res
      return res
    }
    const res = dp(i+1) + dp(i+2)
    memo[i] = res
    return res
  }
  return dp(0)
};

console.log(numDecodings("2263"));
