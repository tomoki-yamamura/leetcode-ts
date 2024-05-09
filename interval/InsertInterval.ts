// intervals = [[1,3],[6,9]], newInterval = [2,5]
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const jak: number[][] = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      jak.push(intervals[i]);
      i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval = [
          Math.min(newInterval[0], intervals[i][0]),
          Math.max(newInterval[1], intervals[i][1])
      ];
      i++;
  }
  jak.push(newInterval);

  while (i < intervals.length) {
      jak.push(intervals[i]);
      i++;
  }

  return jak;
};

export default insert

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]