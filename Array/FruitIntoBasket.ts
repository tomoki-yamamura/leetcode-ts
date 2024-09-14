export function totalFruit(fruits: number[]): number {
  let left = 0;
  let maxLength = 0;
  const map = new Map()
  let point = 0
  for (let right = 0; right < fruits.length; right++) {
    if (map.has(fruits[right])) {
      maxLength++
    } else {
      map.set(fruits[right], 1)
      if (map.size === 2) point = right
      if (map.size > 2) {
        map.delete(fruits[left])
        maxLength = Math.max(maxLength, right - left)
        left = point
      } else {
        maxLength++
      }
    }
  }
  return maxLength
};
