function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack
  }
  return stack.join("");
};
