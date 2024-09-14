export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLength = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    while(set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right]);
    maxLength = Math.max(right-left+1, maxLength)
  }
  return maxLength
}

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
