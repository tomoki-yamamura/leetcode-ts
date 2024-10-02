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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const res = new ListNode(0, head);
  let dummy: ListNode | null = res;

  // Move `head` n steps forward
  for (let i = 0; i < n; i++) {
      if (head) {
          head = head.next;
      }
  }

  // Move both `head` and `dummy` until `head` reaches the end
  while (head) {
      head = head.next;
      dummy = dummy.next!;
  }

  // Remove the nth node from the end
  if (dummy.next) {
      dummy.next = dummy.next.next;
  }

  return res.next;    
}

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 