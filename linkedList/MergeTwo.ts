export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let nodeValue: number;
  let toBeMergedList1: ListNode | null;
  let toBeMergedList2: ListNode | null;

  if (list1.val < list2.val) {
    nodeValue = list1.val;
    toBeMergedList1 = list1.next;
    toBeMergedList2 = list2;
  } else {
    nodeValue = list2.val;
    toBeMergedList1 = list1;
    toBeMergedList2 = list2.next;
  }

  return new ListNode(nodeValue, mergeTwoLists(toBeMergedList1, toBeMergedList2))
}
