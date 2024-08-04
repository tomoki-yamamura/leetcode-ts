export function findRotation(mat: number[][], target: number[][]): boolean {
  let width = mat[0].length;
  let height = mat.length;

  let normal = true;
  let rightOneTime = true;
  let rightTwoTimes = true;
  let rightThreeTimes = true;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (mat[i][j] !== target[i][j]) {
        normal = false;
      }
      if (mat[i][j] !== target[j][width-1-i]) {
        rightOneTime = false
      }
      if (mat[i][j] !== target[height-1-i][width-1-j]) {
        rightTwoTimes = false
      }
      if (mat[i][j] !== target[height-1-j][i]) {
        rightThreeTimes = false
      }
    }
  }
  return normal || rightOneTime || rightTwoTimes || rightThreeTimes;
}
