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

import { ListNode } from "./MergeTwo";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const L1s: number[] = []
  const L2s: number[] = []  

  function createList(list: ListNode | null, map: number[]): void {
    while(list) {
      map.push(list.val)
      list = list.next
    }
  }
  createList(l1, L1s)
  createList(l2, L2s)
  L1s.reverse()
  L2s.reverse()
  
};