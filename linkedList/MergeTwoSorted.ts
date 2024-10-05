/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./MergeTwo"

// export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   let dummy = new ListNode()
//   let cur = dummy
//   while(list1 && list2) {
//     if (list1.val > list2.val) {
//       cur.next = list2
//       list2 = list2.next
//     } else {
//       cur.next = list1
//       list1 = list1.next
//     }
//     cur = cur.next
//   }
//   cur.next = list1 || list2
//   return dummy.next
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list2) return list1
  if (!list1) return list2
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}