function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sArr = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      // 左側から母音を探す
      while (left < right && !vowels.has(sArr[left])) {
          left++;
      }
      // 右側から母音を探す
      while (left < right && !vowels.has(sArr[right])) {
          right--;
      }

      // 左右の母音を交換する
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
  }

  return sArr.join('');
}
