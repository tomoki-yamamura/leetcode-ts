function containsDuplicate(nums: number[]): boolean {
  const store: Set<number> = new Set([...nums]);
  return store.size !== nums.length;
};

