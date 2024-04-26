function uniquePaths(m: number, n: number): number {
  const mesh: number[][] = []
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      const element = new Array(n).fill(1)
      mesh.push(element)
    } else {
      const element: number[] = new Array(n).fill(0)
      element.splice(0, 1, 1)
      mesh.push(element)
    }
  }

  for (let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      mesh[i][j] = mesh[i][j-1] + mesh[i-1][j] 
    }
  }
  
  return mesh[m-1][n-1]
};

console.log(uniquePaths(3, 2));

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3
