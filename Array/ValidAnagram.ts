function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counterMap = new Map();

  for (let char of s) {
    counterMap.set(char, (counterMap.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!counterMap.get(char) || counterMap.get(char) === 0) return false
    counterMap.set(char, counterMap.get(char) - 1)
  }
  return true
}

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
