function removeDuplicates(s: string): string {
  const splited = s.split("")
  const result: string[] = []
  splited.forEach((v, i) => {
    if (result[i-1] === v) {
      result.pop()
    }
  })
};
