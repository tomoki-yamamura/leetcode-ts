function spiralOrder(matrix: number[][]): number[] {
  const vertical = matrix.length;
  const horizontal = matrix[0].length;

  let result = []

  let top = 0
  let right = horizontal - 1
  let bottom = vertical - 1
  let left = 0;

  while(top <= bottom && left <= right) {
    for(let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    for(let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (top <= bottom) {
      for(let i = right; left <= i; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }

    if (left <= right) {
      for(let i = bottom; top <= bottom; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }

  return result
};