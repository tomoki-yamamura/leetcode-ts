// console.log(totalFruit([1,0,1,4,1,4,1,2,3]));


export function totalFruit(fruits: number[]): number {
  let left = 0;
  let maxLength = 0;
  const map = new Map();
  let point = 0;

  for (let right = 0; right < fruits.length; right++) {
    if (!map.has(fruits[right]) && map.size !== 2) {
      map.set(fruits[right], 1);
    } else if (map.has(fruits[right]) && map.size <= 2) {
      map.set(fruits[right], map.get(fruits[right])+1)
    } else {
      const sum = Array.from(map.values()).reduce(
        (acc, value) => acc + value,
        0
      );
      maxLength = Math.max(maxLength, sum);
      const firstKey = map.keys().next().value;
      map.delete(firstKey);
      map.set(fruits[right], 1);
    }
  }
  const sum = Array.from(map.values()).reduce((acc, value) => acc + value, 0);
  maxLength = Math.max(maxLength, sum);
  return maxLength;
}
