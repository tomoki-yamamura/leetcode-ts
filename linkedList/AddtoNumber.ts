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
// const list1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// const list2 = new ListNode(5, new ListNode(6, new ListNode(4)))
import { ListNode } from "./MergeTwo";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
  if(!l1 && !l2 && !carry) return null;

  var total : number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10 + '');
  return new ListNode(total % 10, addTwoNumbers(l1!.next, l2!.next, carry));
};
