export function isSubsequence(s: string, t: string): boolean {
  for(const letter of s) {
    const index = t.indexOf(letter)
    t.substring(index-1, index)
  }
  return true
};

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
