function wordBreak(s: string, wordDict: string[]): boolean {
  const memo: { [key: string]: boolean } = {};

  const rec = (startIndex: number): boolean => {
      if (startIndex === s.length) return true;
      if (startIndex in memo) return memo[startIndex];

      for (const word of wordDict) {
          if (s.startsWith(word, startIndex)) {
              if (rec(startIndex + word.length)) {
                  memo[startIndex] = true;
                  
                  return true;
              }
          }
      }

      memo[startIndex] = false;
      return false;
  };

  return rec(0);
}

export default wordBreak;

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false