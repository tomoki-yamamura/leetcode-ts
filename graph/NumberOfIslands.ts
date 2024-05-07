function numIslands(grid: string[][]): number {
    const visited: boolean[][] = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(false))
    const dfs = (r: number, c: number) => {
      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0' || visited[r][c]) {return}
      visited[r][c] = true
      dfs(r+1, c)
      dfs(r-1, c)
      dfs(r, c+1)
      dfs(r, c-1)
    }

    let result: number = 0
    for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
        if (visited[row][col] === true || grid[row][col] === '0') continue
        dfs(row, col)
        result++
      }
    }
    return result
};

// Example 1:

const grid = 
  [["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]


const res = numIslands(grid)
console.log(res);

// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3