import { ListNode } from "./MergeTwo";

function pairSum(head: ListNode | null): number {
  const map: number[] = []
  while(head) {
    map.push(head.val)
    head = head.next
  }
  let max = -Infinity
  for(let i = 0; i < map.length; i++) {
    max = Math.max(map[i] + map[map.length-i-1], max)
  }
  return max
};