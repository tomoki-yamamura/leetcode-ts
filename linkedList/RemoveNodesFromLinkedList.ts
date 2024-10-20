import { ListNode } from "./MergeTwo";

function removeNodes(head: ListNode | null): ListNode | null {
  let dummy = head
  const stack: ListNode[] = [];

  while(dummy) {
    while(stack.length > 0 && stack[stack.length-1].val < dummy.val) {
      stack.pop()
    }
    stack.push(dummy)
    dummy = dummy.next
  }
  let newHead: ListNode | null = null
  while(stack.length > 0) {
    const node = stack.pop()!
    node.next = newHead
    newHead = node

  }
  return newHead
};