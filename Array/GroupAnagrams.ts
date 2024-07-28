export function groupAnagrams(strs: string[]): string[][] {
    
  const result: string[][] = []
  const signatureMap = new Map()

  for (const s of strs) {
    const signature = getSignature(s)
    if (!signatureMap.has(signature)) {
      signatureMap.set(signature, [])
    }
    signatureMap.get(signature).push(s)
  }

  signatureMap.forEach(value => result.push(value))
  return result
};

function getSignature(words: string) {
  const count = Array(26).fill(0)
  for (const w of words) {
    count[w.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
          result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
      }
  }

  return result.join('');
}