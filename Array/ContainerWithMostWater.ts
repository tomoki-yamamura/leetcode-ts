function maxArea(height: number[]): number {
  let right = height.length-1;
  let left = 0;
  let result = 0
  let tmpHeight = 0

  while(left < right) {
    let width = right - left;
    if (height[left] <= height[right]) {
      tmpHeight = height[left]
      result = Math.max((tmpHeight*width), result)
      left++
    } else {
      tmpHeight = height[right]
      result = Math.max((tmpHeight*width), result)
      right--
    }
  }
  return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
