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


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let result: ListNode | null = null;
  for (let i = 0; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i])
  }
  return result
};

function mergeTwoLists(result: ListNode | null, list: ListNode | null): ListNode | null {
  if(!result) return list
  if (!list) return result
  if(result.val < list.val) {
    result.next = mergeTwoLists(result.next, list)
    return result
  } else {
    result.next = mergeTwoLists(result, list.next)
    return list
  }
}

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []