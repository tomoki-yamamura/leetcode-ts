function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false
  const t_length = t.length
  let subsequence = 0
  for (let i = 0; i < t_length; i++) {
    if (t[i] === s[subsequence]) {
      subsequence++
    }
  }

  return subsequence === s.length
};

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
