export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// export function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   const mergedHead: ListNode = new ListNode(-1, null);
//   let prev: ListNode = mergedHead;

//   while(list1 && list2) {
//     if(list1.val <= list2.val) {
//       prev.next = list1
//       list1 = list1.next
//     } else {
//       prev.next = list2
//       list2 = list2.next
//     }
//     prev = prev.next
//   }
//   prev.next = list1 ? list1 : list2;
//   return mergedHead.next;
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
