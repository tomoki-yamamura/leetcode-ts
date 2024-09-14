function totalFruit(fruits: number[]): number {
  let left = 0;
  let maxLength = 0;
  const map = new Map()
  for (let right = 0; right < fruits.length; right++) {
    
    if (map.has(fruits[right])) {
      map.set(fruits[right], map.get(fruits[right]++))
    } else {
      map.set(fruits[right], 1)
    }
  }
};