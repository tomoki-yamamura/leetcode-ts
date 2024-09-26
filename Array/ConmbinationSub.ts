function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  function makeCombination(idx: number, comb: number[], total: number): void {
    if (total === target) {
      res.push([...comb]);
      return;
    }

    if (total > target || idx >= candidates.length) {
      return;
    }

    // 現在の候補を組み合わせに追加
    comb.push(candidates[idx]);
    makeCombination(idx, comb, total + candidates[idx]);

    // 候補を元に戻して次の候補を試す
    comb.pop();
    makeCombination(idx + 1, comb, total);
  }

  makeCombination(0, [], 0);
  return res;
}