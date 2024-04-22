function wordBreak(s: string, wordDict: string[]): boolean {
  const result: boolean[] = new Array(s.length).fill(false)
  let left = 0
  for (let right = 0; right <= s.length; right++) {
    const sub = s.substring(left, right)
    for(let word of wordDict) {
      if(word === sub) {
        result[right-1] = true
      }
    }
    console.log(result);
    
  }
  return result[s.length-1]
};

const s = "aaaaaaa"
const wordDict = ["aaaa","aaa"]
console.log(wordBreak(s, wordDict));

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