function totalCost(costs: number[], k: number, candidates: number): number {
  let cost = 0;
  for (let i = 0; i < k; i++) {
    const extractCandidates = new Map();
    if (costs.length < candidates * 2) {
      const min = Math.min(...costs);
      const minIndex = costs.indexOf(min);
      costs.splice(minIndex, 1);
      cost += min;
    } else {
      const map = new Map();
      for (let i = 0; i < candidates; i++) {
        map.set(i, costs[i]);
        map.set(costs.length - 1 - i, costs[costs.length - 1 - i]);
      }
      const [minKey, minValue] = findMinInMap(map)
      costs.splice(minKey, 1);
      cost += minValue
    }
  }
  return cost;
}

function findMinInMap(map: Map<number, number>): number[]  {
  let minKey = 0
  let minValue = -Infinity

  for (const [key, value] of map) {
    if (value < minValue) {
      minValue = value;
      minKey = key;
    }
  }
  return [minKey, minValue]
}

// Example 1:

// Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
// Output: 11
// Explanation: We hire 3 workers in total. The total cost is initially 0.
// - In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
// - In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
// - In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
// The total hiring cost is 11.
