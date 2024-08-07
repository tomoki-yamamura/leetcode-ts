 export function rotate(matrix: number[][]): void {
  let n = matrix.length;
  let depth = Math.floor(n / 2); // 中心からの深さを計算

  for(let i = 0; i < depth; i++) {
    let len = n - 2*i - 1
    let opp = n - 1 - i;
    for(let j = 0; j < len; j++) {
      let tematrixp = matrix[i][i+j]
      matrix[i][i + j] = matrix[opp - j][i];
      matrix[opp - j][i] = matrix[opp][opp - j];
      matrix[opp][opp - j] = matrix[i + j][opp];
      matrix[i + j][opp] = tematrixp;
    }
  }
 };