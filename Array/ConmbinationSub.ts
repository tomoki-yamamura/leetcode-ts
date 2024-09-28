export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  function makeCombination(idx: number, comb: number[], total: number): void {
    if (total === target) {
      res.push([...comb]);
      return;
    }

    if (total > target || idx >= candidates.length) {
      return;
    }

    comb.push(candidates[idx]);
    makeCombination(idx, comb, total + candidates[idx]);

    comb.pop();
    makeCombination(idx + 1, comb, total);
  }

  makeCombination(0, [], 0);
  return res;
}