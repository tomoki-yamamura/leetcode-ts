function findRotation(mat: number[][], target: number[][]): boolean {
  let width = mat[0].length
  let height = mat.length

  let normal = true;
  let right90 = true;
  let right180 = true;
  let right270 = true;

  for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
      if (mat[i][j] !== target[i][j]) {
        normal = false
      }
      if (mat[i][j] !== target[j])
    }
  }
};