function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights.length) return []
  const numRows = heights.length
  const numCols = heights[0].length

  const pacific = Array(numRows).fill(null).map(() => Array(numCols).fill(false))
  const atlantic = Array(numRows).fill(null).map(() => Array(numCols).fill(false))
  
  const dfs = (r: number, c: number, current: number, ocean: boolean[][]) =>{
    if (r < 0 || c < 0 || r >= numRows || c >= numCols) return;
    if (heights[r][c] < current) return;
    if (ocean[r][c]) return;
    ocean[r][c] = true;
    dfs(r+1, c, heights[r][c], ocean);
    dfs(r-1, c, heights[r][c], ocean);
    dfs(r, c+1, heights[r][c], ocean);
    dfs(r, c-1, heights[r][c], ocean);
  };

  for (let col=0; col < numCols; col++){
    dfs(0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(numRows-1, col, Number.MIN_SAFE_INTEGER, atlantic);
   }
   //and for the first and last columns
   for (let row = 0; row < numRows; row++){
     dfs(row, 0, Number.MIN_SAFE_INTEGER, pacific)
     dfs(row, numCols-1, Number.MIN_SAFE_INTEGER, atlantic)
   }
   let result = [];
   for (let i=0; i < numRows; i++){
     for (let j=0; j < numCols; j++){
       if (atlantic[i][j] && pacific[i][j]){
         result.push([i, j]);
       }
     }
   }
   return result;
};

export default pacificAtlantic
