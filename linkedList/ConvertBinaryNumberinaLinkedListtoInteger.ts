class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  const map: number[] = []
  function nextNode(node: ListNode | null) {
    if (node === null) return
      map.push(node.val)
      nextNode(node?.next!)
  }
  nextNode(head)
  if (map.length === 0) return 0
  const binary = map.reduce((acc, cur) => String(acc) + String(cur), "")
  return parseInt(binary, 2)
}
