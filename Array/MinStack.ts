class MinStack {
  private stack: number[]

  constructor() {
    this.stack = []
  }

  push(val: number): void {
      this.stack.push(val)
  }

  pop(): void {
      this.stack.pop()
  }

  top(): number {
    return [...this.stack].sort((a, b) => b - a)[0]
  }

  getMin(): number {
    return [...this.stack].sort((a, b) => a - b)[0]
  }
}

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/