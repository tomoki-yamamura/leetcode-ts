// console.log(characterReplacement("AABABBA", 1));

export function characterReplacement(s: string, k: number): number {
  const map: { [key: string]: number} = {}
  let largestCount = 0;
  let begin = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    const c = s[end]
    map[c] = (map[c] || 0) + 1
    largestCount = Math.max(largestCount, map[c])

    if (end - begin + 1 - largestCount > k) {
      map[s[begin]] -= 1
      begin += 1
    }
    maxLen = Math.max(maxLen, end - begin + 1);     // end - beg + 1 = size of the current window...
  }
  return maxLen
};