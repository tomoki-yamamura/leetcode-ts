export default function numDecodings(s: string): number {
  if (s.slice(0, 1) === "0") {
    return 0;
  }
  const len = s.length

  const cache: Record<number, number> = {}
  cache[len] = 0
  cache[len+1] = 0
  cache[len-1] = s[len- 1] !== "0" ? 1 : 0

  for(let i = len-1; 0 <= i; i--) {
    if(s[i] === "0" || i === len) continue
    if((s[i] === "1" || s[i] === "2") && s[i+1] < "7") {
      cache[i] += cache[i+2]
      cache[i] += cache[i+1]
    } else {
      cache[i] = cache[i+2]
    }
  }
  return cache[0]
}

console.log(numDecodings("12"));
